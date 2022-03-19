
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
import UploadMetadataButton from "../UploadMetadataButton/UploadMetadataButton";

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

const getAllStakedNfts = async (nearAccountId: string) => {
    //TODO
}

const DisplayNft = () => {

    const unstake = async (token_id: string) => {
        //TODO
    }
    
    const stake = async (token_id: string) => {
        //TODO
    }

    const hover = (token_id: string) => {
        //TODO
    }
    const hoverleave = (token_id:string) => {
        //TODO
    }

    return (
        <>
            <h1> Unstaked Lands </h1>      
            <Collection>
            </Collection>
            <h1> Staked Lands </h1>     
            <Collection>
            </Collection>
            <UploadMetadataButton/>
        </>
    );
};

export {
    DisplayNft,
    getAllStakedNfts
}
