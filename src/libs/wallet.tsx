import { ethers } from "ethers";

declare var window: any;
const { ethereum } = window;

// const RINKEBY_CHAIN_ID = 4;
const RINKEBY_CHAIN_ID_HEX = "0x4";
const RINKEBY_RPC_URL = "https://rinkeby.infura.io/v3/";

const getWalletAddr = async (): Promise<string> => {
  if (!ethereum) {
    return "";
  }

  // Get current connected addresses.
  const accounts = await ethereum.request({ method: "eth_accounts" });
  if (accounts.length > 0) {
    const chainId = await ethereum.request({ method: "eth_chainId" });
    // console.log("chain id is " + chainId);
    if (chainId != RINKEBY_CHAIN_ID_HEX) {
      console.error("Wrong network");
      return "";
    }
    // console.log("Found an account! Address: ", accounts[0]);
    return accounts[0];
  } else {
    console.log("No authorized account found");
    return "";
  }
};

const switchChain = async (chainIdHex, chainUrl) => {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }],
    });
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: chainIdHex,
              chainName: "ETH",
              rpcUrls: [chainUrl] /* ... */,
            },
          ],
        });
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainIdHex }],
        });
      } catch (addError) {
        // handle "add" error
        console.log("Failed to add network " + addError);
        return false;
      }
    }
    // handle other "switch" errors
    console.error("Error in switch network");
    return false;
  }
};

// Return the wallet address, connect wallet if not connected yet.
const connectWallet = async () => {
  let account = await getWalletAddr();
  if (account != "") return account;

  if (!ethereum) {
    alert("Please install Metamask!");
    return "";
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // console.log("Found an account! Address: ", accounts[0]);

    const chainId = await ethereum.request({ method: "eth_chainId" });
    if (chainId != RINKEBY_CHAIN_ID_HEX) {
      console.log("Network is incorrect, switching network.");
      await switchChain(RINKEBY_CHAIN_ID_HEX, RINKEBY_RPC_URL);
    }

    return accounts[0];
  } catch (err) {
    alert(err);
    return "";
  }
};

// Sign a message using wallet.
const signMsg = async (msg: string) => {
  if (!ethereum) {
    throw new Error("Please install Metamask!");
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const sig = await signer.signMessage(msg);
  const addr = await signer.getAddress();
  return { sig, addr };
};

// Verify if the sig is msg signed by addr.
const verifySig = async (msg: string, addr: string, sig: string) => {
  try {
    const signerAddr = await ethers.utils.verifyMessage(msg, sig);
    return signerAddr === addr;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { getWalletAddr, switchChain, connectWallet, signMsg, verifySig };
