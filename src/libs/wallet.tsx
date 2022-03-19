declare var window: any;
const {ethereum} = window;

// const RINKEBY_CHAIN_ID = 4;
const RINKEBY_CHAIN_ID_HEX = "0x4";
const RINKEBY_RPC_URL = "https://rinkeby.infura.io/v3/";

const getWalletAddr = async () => {
    if (!ethereum) {
      return "";
    }
  
    // Get current connected addresses.
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length > 0) {
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("chain id is " + chainId);
      if (chainId != RINKEBY_CHAIN_ID_HEX) {
        console.log("Wrong network");
        return "";
      }
      console.log("Found an account! Address: ", accounts[0]);
      return accounts[0];
    } else {
      console.log("No authorized account found");
      return "";
    }
  }
  
const switchChain = async (chainIdHex, chainUrl) => {
    try {
        await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainIdHex }],
        });
    } catch (switchError: any) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
        try {
            await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                chainId: chainIdHex,
                chainName: "ETH",
                rpcUrls: [chainUrl] /* ... */,
                },
            ],
            });
            await ethereum.request({
            method: 'wallet_switchEthereumChain',
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
}

const walletAddr = getWalletAddr();


export {
    getWalletAddr,
    switchChain
}
