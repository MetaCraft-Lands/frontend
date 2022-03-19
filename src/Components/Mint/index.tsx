
import {randomSkin} from "../../config/skins"

import { Button } from "./styles";
import { ethers } from 'ethers';

import contract from '../../contracts/MetaCraft.json';

const contractAddr = "0xa232d51eCc25B2d28686db34fB2045E3E54BCA74";
const abi = contract.abi;
declare var window: any;
const { ethereum } = window;

const Mint = () => {

    const mintNftHandler = async () => { 
        try {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddr, abi, signer);
    
          console.log("Mining... please wait");
          const metadata = {
              "_tokenId": 1,
              "_seed": 79311,
              "_tokenMetadataIPFSHash": "QmahudrKVthW5sccUN22bVbfxekjmttATPXeeoVdtJmth8"
          }
          let nftTxn = await nftContract.mintWorld(metadata);
    
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

export default Mint;
