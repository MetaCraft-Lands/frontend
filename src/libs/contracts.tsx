import { ethers } from 'ethers';

import contract from '../contractAbi/MetaCraft.json';

const contractAddr = "0x1ec18749bB7Aa09Ef216A1CF4043592B58a708a1";
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


