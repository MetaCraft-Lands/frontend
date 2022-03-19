
import {randomMeta} from "../../config/metadata"

import { Button } from "./styles";
import { ethers } from 'ethers';

import contract from '../../contracts/MetaCraft.json';

const contractAddr = "0x1ec18749bB7Aa09Ef216A1CF4043592B58a708a1";
const abi = contract.abi;
declare var window: any;
const { ethereum } = window;

const MintNft = () => {

    const mintNftHandler = async () => { 
        try {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddr, abi, signer);
    
          console.log("Mining... please wait");
          let nftTxn = await nftContract.mintWorld(randomMeta());
    
          await nftTxn.wait();
    
          alert(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        } catch (err) {
          console.log(err);
        }
    
      }

    return (
        <>
            <Button onClick={mintNftHandler}> Mint Now </Button>
        </>
    );
};

export default MintNft;
