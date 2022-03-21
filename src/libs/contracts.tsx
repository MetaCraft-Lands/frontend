import { ethers } from "ethers";

import nftAbi from "../contractAbi/MetaCraft.json";
import tokenAbi from "../contractAbi/Build.json";

const NFT_CONTRACT_ADDR = "0xC7087CD8eC021423dE4E6C5d67858E09c7fDb0b3";
const TOKEN_CONTRACT_ADDR = "0x91f4141C818beaEaA867F003ccFD3612C84654A6";

declare var window: any;
const { ethereum } = window;

const getNftContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(NFT_CONTRACT_ADDR, nftAbi.abi, signer);
};

// Globle contract singleton instance shared by many components.
const nftContract = getNftContract();

const getTokenContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(TOKEN_CONTRACT_ADDR, tokenAbi.abi, signer);
};

const tokenContract = getTokenContract();

export { nftContract, tokenContract };
