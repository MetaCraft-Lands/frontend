
import {randomMeta} from "../../config/metadata"

import { Button } from "./styles";

import { nftContract } from "../../libs/contracts";

const MintNft = () => {

    const mintNftHandler = async () => { 
        try {    
          console.log("Mining... please wait");
          let nftTxn = await nftContract.mintLand(randomMeta());
    
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
