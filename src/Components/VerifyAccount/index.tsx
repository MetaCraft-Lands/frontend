import { useState } from "react";
//@ts-ignore
import Parse from "parse/dist/parse.min.js";
import { Button } from "../Mint/styles";
import { walletAddr } from "../../libs/wallet";

Parse.initialize(
  process.env.REACT_APP_APPLICATION_ID,
  process.env.REACT_APP_JAVASCRIPT_KEY
);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

type User = {
  account: string;
  uuid: string;
  username: string;
};

const _readVerifyStatusFromDB = async (uuid: string): Promise<boolean> => {
  console.log(process.env);
  const query = new Parse.Query("VerifiedUser");
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo("Uuid", uuid);
  // run the query
  const users = await query.findAll();
  console.log(users);
  return users.length > 0 && users[0].IsVerified;
};

const _walletSign = async (account: string) => {};

const verify = async (user: User): Promise<boolean> => {
  if (!(await _readVerifyStatusFromDB(user.uuid))) {
    try {
      await _walletSign(user.account);
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  return true;
};

const parseUrlParams = (): User | null => {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);

  let encoded = urlParams.get("params");
  let atob = require("atob");
  let decoded = atob(encoded);
  urlParams = new URLSearchParams(decoded);

  let uuid = urlParams.get("uuid") || "";
  let username = urlParams.get("username") || "";
  return uuid ? { account: walletAddr, uuid: uuid, username: username } : null;
};

const VerifyAccount = () => {
  const [isVerified, setIsVerified] = useState(false);
  const user: User | null = parseUrlParams();

  const verifyHandler = () => {
    if (user) {
      verify(user).then((verified) => {
        setIsVerified(verified);
      });
    }
  };

  return (
    <>
      {isVerified ? (
        `Successfully verified user ${user?.username}`
      ) : (
        <Button onClick={verifyHandler}>Verify account</Button>
      )}
    </>
  );
};

export { VerifyAccount };
