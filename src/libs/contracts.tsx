import { ethers } from 'ethers';

import contract from '../contractAbi/MetaCraft.json';

const contractAddr = "0xdE0344a9B4f138406a72c2d9B82F596351ef061a";
const abi = contract.abi;
declare var window: any;
const { ethereum } = window;

const getNftContract = () => {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          return new ethers.Contract(contractAddr, abi, signer);
}

const nftContract = getNftContract();

const tokenContract = null;

export {
  nftContract,
  tokenContract
}


