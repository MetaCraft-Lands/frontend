import React, { useState } from "react";
import { Button } from "../../styles/styles";
import { nftContract } from "../../libs/contracts";
import { BigNumber } from "ethers";
import { readUpdatedIpfsMetadataHash } from "../../config/metadata";

interface Nft {
  id: BigNumber; //uint256 nft token id.
}

const updateNftIpfsMetadata = async (id: BigNumber, ipfsHash: string) => {
  await nftContract.updateMetadataIPFSHash(id, ipfsHash);
};

// token id is provided by parent component through props.
const UploadMetadataButton = (props: Nft) => {
  console.log("Update metadata for nft " + props.id);
  const [success, setSuccess] = useState(false);

  const buttonClick = () => {
    const fileElem = document.getElementById("fileElem");
    if (fileElem) {
      fileElem.click();
    }
  };

  const fileUploaded = async () => {
    let hash: string = readUpdatedIpfsMetadataHash(props.id);
    console.log("Updated hash: " + hash);
    try {
      console.log("Updating NFT... please wait");
      let nftTxn = await nftContract.updateMetadataIPFSHash(props.id, hash);
      await nftTxn.wait();
      alert(
        `NFT updated, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
    } catch (err) {
      alert(err);
    }
    setSuccess(true);
  };

  return (
    <div>
      <input
        type="file"
        id="fileElem"
        style={{ display: "none" }}
        onChange={fileUploaded}
      />
      <Button id="fileSelect" onClick={buttonClick}>
        Update
      </Button>
      {success && alert("NFT metadata updated!")}
    </div>
  );
};

export default UploadMetadataButton;
