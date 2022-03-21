import { useState } from "react";
import { Button } from "../../styles/styles";
//@ts-ignore
import Parse from "parse/dist/parse.min.js";
import { tokenContract } from "../../libs/contracts";
import { getWalletAddr } from "../../libs/wallet";
import { BigNumber } from "ethers";

Parse.initialize(
  process.env.REACT_APP_APPLICATION_ID,
  process.env.REACT_APP_JAVASCRIPT_KEY
);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

const DECIMAL = 5;

const getAccumulatedPlayTimeFromDB = async (
  account: string
): Promise<number | null> => {
  const query = new Parse.Query("PlayTime");
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo("account", account);
  // run the query
  const results = await query.findAll();
  return results.length > 0 ? results[0].get("accumulatedPlayTime") : null;
};

const playTimeToBuildAmount = (playTime: number) => {
  return playTime * 10 ** -5;
};

const resetPlayTimeInDB = async (account: string) => {
  const query = new Parse.Query("PlayTime");
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo("account", account);
  let playTime = await query.first();
  playTime.set("accumulatedPlayTime", 0);
  playTime.set("tikTime", "");
  playTime.set("tokTime", "");

  await playTime.save();
};

const mint = async (amount: number) => {
  console.log("Mint build token...");
  await tokenContract.mint(amount);
};

const getTokenBalance = async (account: string) => {
  const balance = await tokenContract.balanceOf(account);
  return balance.toNumber();
};

const getAmountToClaimFromDB = async (
  account: string
): Promise<number | null> => {
  try {
    const amount = await getAccumulatedPlayTimeFromDB(account);
    return amount ? playTimeToBuildAmount(amount) : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const loadAmountToClaim = async (
  curValue: number,
  setter: (x: number) => void
) => {
  const addr = await getWalletAddr();
  if (!addr) return;

  const amountToClaim = await getAmountToClaimFromDB(addr);
  if (amountToClaim && amountToClaim != curValue) {
    setter(amountToClaim);
  }
};

const loadTokenBalance = async (
  curValue: number,
  setter: (x: number) => void
) => {
  const addr = await getWalletAddr();
  if (!addr) return;

  let balance: number = await getTokenBalance(addr);
  balance = balance * 10 ** -DECIMAL;
  if (balance !== curValue) {
    setter(balance);
  }
};

const BuildToken = () => {
  const [tokenToClaim, setTokenToClaim] = useState(0);
  loadAmountToClaim(tokenToClaim, setTokenToClaim);

  const [tokenBalance, setTokenBalance] = useState(0);
  loadTokenBalance(tokenBalance, setTokenBalance);

  const refreshHandler = async () => {
    await loadAmountToClaim(tokenToClaim, setTokenToClaim);
  };

  const claimHandler = async () => {
    const addr = await getWalletAddr();
    if (!addr) return;

    const amountToClaim = await getAmountToClaimFromDB(addr);
    if (amountToClaim === null) {
      console.error("Failed to read play time from DB");
      return;
    } else if (amountToClaim === 0) {
      console.log("No token to claim");
      return;
    }

    // 10**5 is the decimals for the token.
    await mint(Math.floor(amountToClaim * 10 ** DECIMAL));

    resetPlayTimeInDB(addr);
    setTokenToClaim(0);
    await loadTokenBalance(tokenBalance, setTokenBalance);
  };

  return (
    <>
      <h1> {tokenToClaim} $BUILD to claim </h1>
      <Button onClick={refreshHandler}>Refresh</Button>
      <br />
      <br />
      <Button onClick={claimHandler}>Claim</Button>
      <br></br>
      <br></br>
      <h1> Your current balance: {tokenBalance} $BUILD</h1>
    </>
  );
};

export default BuildToken;
