import React, { useState } from "react";
import { nftContract } from "../../libs/contracts";
import { Button } from "../../styles/styles";

const LandSeed = (props: any) => {
  const [seed, setSeed] = useState(0);

  const fetchSeedHandler = () => {
    if (seed === 0) {
      nftContract.getSeed(props.id).then((seed) => {
        setSeed(seed);
      });
    }
    if (seed != 0) {
      alert(`Seed of land ${props.id} is ${seed}`);
    }
  };

  return (
    <>
      <Button onClick={fetchSeedHandler}> Seed </Button>
    </>
  );
};

export default LandSeed;
