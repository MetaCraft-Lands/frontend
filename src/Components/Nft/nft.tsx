
import React, {useEffect, useState} from "react";
import {
    Collection, Image,
    NFT,
    SelectSkin,
    NFTName,
    Stake, NftTraits, Frame, Trait
} from "./styles";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';
import {nftContract} from '../../libs/contracts';
import {walletAddr} from '../../libs/wallet';
import { BigNumber } from "ethers";
import UploadMetadataButton from "../UploadMetadataButton/UploadMetadataButton";

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

const getNftIds = async (account: string):Promise<BigNumber[]> => {
    console.log("fetching all nfts from chain...");
    let numNft: number = await nftContract.balanceOf(account);

    let nftCalls: any = []
    for (let i = 0; i < numNft; i++) {
        nftCalls.push(nftContract.tokenOfOwnerByIndex(account, i));
    }
    let tokenIds: BigNumber[]  = await Promise.all(nftCalls);
    return tokenIds;
}

const getNft = (id: BigNumber): JSX.Element => {
    return (<NFT><Frame>Land #{id.toString()}</Frame></NFT>);
}

const lands = (await getNftIds(walletAddr)).map(getNft);

const DisplayNft = () => {
    const [nfts, setNfts] = useState<JSX.Element[]>(lands);

    return (
        <>
            <h1> Unstaked Lands </h1>      
            <Collection>
            {nfts}
            </Collection>
            <h1> Staked Lands </h1>     
            <Collection>
            </Collection>
            <UploadMetadataButton/>
        </>
    );
};

export {
    DisplayNft
}
