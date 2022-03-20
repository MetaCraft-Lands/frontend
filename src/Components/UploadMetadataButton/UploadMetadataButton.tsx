import React, { useState } from "react";
import { Button } from "../../styles/styles";

const UploadMetadataButton = () => {
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
