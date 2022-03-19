import { useState } from "react";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';
import { Button } from "../Mint/styles";


Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;


const VerifyAccount = () => {

  return (
    <Button> Verify account </Button>
  )
}

export {
  VerifyAccount
}
