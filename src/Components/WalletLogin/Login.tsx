import { useState } from "react";
import { Span } from "../Header/styles";
import {getWalletAddr, switchChain } from "../../libs/wallet";

declare var window: any;
const {ethereum} = window;

// const RINKEBY_CHAIN_ID = 4;
const RINKEBY_CHAIN_ID_HEX = "0x4";
const RINKEBY_RPC_URL = "https://rinkeby.infura.io/v3/";



// Wallet login.
const Login = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  // Set account to already connected user if any.
  getWalletAddr().then((addr) => {setCurrentAccount(addr)});

  const signInHandler = async () => { 
    if (!ethereum) {
      alert("Please install Metamask!"); 
      return;
    }
  
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);

      const chainId = await ethereum.request({ method: 'eth_chainId' });
      if (chainId != RINKEBY_CHAIN_ID_HEX) {
        console.log("Network is incorrect, switching network.");
        await switchChain(RINKEBY_CHAIN_ID_HEX, RINKEBY_RPC_URL);
      }

      setCurrentAccount(accounts[0]);

    } catch (err) {
      console.log(err);
    }
  }

  // Listen to account change.
  ethereum.on(
    'accountsChanged', 
    (accounts: Array<string>) => {setCurrentAccount(accounts[0]);});
  
  const signInButton = () => {
    return (
      <Span onClick={signInHandler}>
        Connect with MetaMask
      </Span>
    )
  }
  
  const connectedButton = () => {
    return (
      <Span>
        {currentAccount}
      </Span>
    )
  }

  return <>{currentAccount == "" ? signInButton() : connectedButton()}</>;
};

export default Login;
