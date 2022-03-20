import { useState } from "react";
import { Collection, Image, NFT, Frame } from "./styles";
//@ts-ignore
import Parse from "parse/dist/parse.min.js";
import { nftContract } from "../../libs/contracts";
import { getWalletAddr } from "../../libs/wallet";
import { BigNumber } from "ethers";
import UploadMetadataButton from "../UploadMetadataButton/UploadMetadataButton";
import LandSeed from "../LandSeed";

declare var window: any;
const { ethereum } = window;

Parse.initialize(
  process.env.REACT_APP_APPLICATION_ID,
  process.env.REACT_APP_JAVASCRIPT_KEY
);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

const IPFS_GATEWAY = "gateway.pinata.cloud";

type Land = {
  id: BigNumber; // uint256
  name: string;
  image: string;
};

const getNfts = async (account: string): Promise<Land[]> => {
  console.log("fetching all nfts from chain...");
  let numNft: number = await nftContract.balanceOf(account);

  let calls: any = [];
  for (let i = 0; i < numNft; i++) {
    calls.push(nftContract.tokenOfOwnerByIndex(account, i));
  }
  let tokenIds: BigNumber[] = await Promise.all(calls);

  let uris = await Promise.all(
    tokenIds.map(async (id) => {
      return nftContract.tokenURI(id);
    })
  );
  let metas: any = await Promise.all(
    uris.map(async (uri) => {
      uri = uri.replace("cf-ipfs.com", IPFS_GATEWAY);
      console.log("Fetching " + uri);
      const resp = await fetch(uri);
      return await resp.json();
    })
  );

  let lands: Land[] = [];
  for (let i in tokenIds) {
    lands.push({
      id: tokenIds[i],
      name: metas[i].name,
      image: metas[i].image.replace("ipfs://", `https://${IPFS_GATEWAY}/ipfs/`),
    });
  }

  return lands;
};

const getNftJsx = (land: Land): JSX.Element => {
  return (
    <NFT>
      <Frame>
        <Image src={land.image} alt={"nft"} />
        Land #{land.id.toString()}
        <LandSeed id={land.id} />
        <UploadMetadataButton />
      </Frame>
    </NFT>
  );
};

// Compare 2 lands list.
const landsEq = (x: Land[], y: Land[]) => {
  if (x.length != y.length) {
    return false;
  }

  for (let i = 0; i < x.length; i++) {
    if (!x[i].id.eq(y[i].id)) {
      return false;
    }
  }

  return true;
};

const loadNft = async (
  account: string,
  nfts: Land[],
  setFn: (x: Land[]) => void
) => {
  const newNfts = await getNfts(account);
  if (!landsEq(newNfts, nfts)) {
    setFn(newNfts);
  }
};

const DisplayNft = () => {
  const [nfts, setNfts] = useState<Land[]>([]);

  getWalletAddr().then(async (account) => {
    if (account) {
      // Load nfts if the current nfts is out of sync with the chain.
      await loadNft(account, nfts, setNfts);
    }
  });

  // Listen to account change and reload nfts.
  ethereum.on("accountsChanged", async () => {
    const newAccount = await getWalletAddr();
    await loadNft(newAccount, nfts, setNfts);
  });

  return (
    <>
      <h1> Unstaked Lands </h1>
      <Collection>{nfts.map(getNftJsx)}</Collection>
      <h1> Staked Lands </h1>
      <Collection></Collection>
    </>
  );
};

export { DisplayNft };
