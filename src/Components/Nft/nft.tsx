
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

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;


const getSkinImage = (nft: any) => {
    return nft.metadata.media.replace("preview-skin", "skin");
}

const getStakedNft = async (tokenId: string) => {
    const query = new Parse.Query("StakeNft");
    // use the equalTo filter to look for user which the name is John. this filter can be 
    // used in any data type
    query.equalTo('tokenId', tokenId);
    let results = await query.findAll();
    return results.length > 0 ? results[0]: null;
}

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
        </>
    );
};

export {
    DisplayNft,
    getAllStakedNfts
}
