import { ethers } from "ethers";

import nftAbi from "../contractAbi/MetaCraft.json";
import tokenAbi from "../contractAbi/Build.json";

const NFT_CONTRACT_ADDR = "0xdE0344a9B4f138406a72c2d9B82F596351ef061a";
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
