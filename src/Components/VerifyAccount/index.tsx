import { useState } from "react";
//@ts-ignore
import Parse from "parse/dist/parse.min.js";
import { Button } from "../Mint/styles";
import { connectWallet, signMsg, verifySig } from "../../libs/wallet";
import { Verify } from "./styles";

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
  query.equalTo("uuid", uuid);
  // run the query
  const users = await query.findAll();
  console.log(users);
  return users.length > 0 && users[0].IsVerified;
};

const _writeVerifyStatusToDB = async (user: User, isVerified: boolean) => {
  const query = new Parse.Object("VerifiedUser");
  query.set("uuid", user.uuid);
  query.set("account", user.account);
  query.set("username", user.username);
  query.set("isVerified", isVerified);
  await query.save();
};

const _walletSign = async (): Promise<boolean> => {
  const uuid = require("uuid");
  const msg = "nounce: " + uuid.v4();

  const { sig, addr } = await signMsg(msg);
  return await verifySig(msg, addr, sig);
};

const verify = async (user: User): Promise<boolean> => {
  let verifyStatus = await _readVerifyStatusFromDB(user.uuid);
  if (!verifyStatus) {
    try {
      verifyStatus = await _walletSign();
      await _writeVerifyStatusToDB(user, verifyStatus);
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  return verifyStatus;
};

const parseUrlParams = async (): Promise<User | null> => {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);

  let encoded = urlParams.get("params");
  let atob = require("atob");
  let decoded = atob(encoded);
  urlParams = new URLSearchParams(decoded);

  let uuid = urlParams.get("uuid") || "";
  let username = urlParams.get("username") || "";
  return uuid
    ? { account: await connectWallet(), uuid: uuid, username: username }
    : null;
};

const VerifyAccount = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const verifyHandler = async () => {
    const user: User | null = await parseUrlParams();
    if (user) {
      setUser(user);
      verify(user).then((verified) => {
        setIsVerified(verified);
      });
    }
  };

  return (
    <Verify>
      {isVerified ? (
        <h1> Successfully verified user ${user?.username} </h1>
      ) : (
        <Button onClick={verifyHandler}>Verify account</Button>
      )}
    </Verify>
  );
};

export { VerifyAccount };
