import { useState } from "react";
import { Button } from "../../styles/styles";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';
import {tokenContract} from "../../libs/contracts";

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

// // const response = await getLastTransactionStatus();
// const getAccumulatedPlayTime = async (nearAccountId: string) => {
//     const query = new Parse.Query('PlayTime');
//     // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
//     query.equalTo('nearAccountId', nearAccountId);
//     // run the query
//     const results = await query.findAll();
//     // @ts-ignore
//     console.log('results ', results);
//     return results.length > 0 ? results[0] : null;
// }

// const resetPlayTime = async (nearAccountId: string) => {
//   const query = new Parse.Query('PlayTime');
//   // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
//   query.equalTo('nearAccountId', nearAccountId);
//   let playTime = await query.first();
//   playTime.set("accumulatedPlayTime", 0);
//   playTime.set("tikTime", "");
//   playTime.set("tokTime", "");

//   await playTime.save();
// }


const mint = async (amount: number) => {
  //TODO
}

const getTokenBalance = async () => {
  //TODO
} 

const BuildToken = () => {
  return (
    <>
            <h1>0 $BUILD to claim </h1>
            {/* <h1>{responseMsg ? "Successfully claimed $BUILDs!" : ""}</h1> */}
            <Button>Refresh</Button>
            <br/>
            <br/>
            <Button>Claim</Button>
            <br></br>
            <br></br>
            <h1> Your current balance: 0 $BUILD</h1>
    </>
  )
}

export default BuildToken;