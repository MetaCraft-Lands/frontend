import React, { useState } from "react";
import { Button } from "../../styles/styles";
import { nftContract } from "../../libs/contracts";
import { BigNumber } from "ethers";

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

  const showSuccess = () => {
    setSuccess(true);
  };

  return (
    <div>
      <input
        type="file"
        id="fileElem"
        style={{ display: "none" }}
        onChange={showSuccess}
      />
      <Button id="fileSelect" onClick={buttonClick}>
        Update
      </Button>
      {success && alert("NFT metadata updated!")}
    </div>
  );
};

export default UploadMetadataButton;
