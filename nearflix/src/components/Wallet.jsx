import React, { useEffect, useCallback, useState } from "react";
import { accountBalance, login, logout as destroy } from "../utils/near";

function Wallet({ address, amount, symbol }) {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  

  return (
    <div>
        <div>{account.accountId}</div>
        <div>{balance}</div>
        <div>NEAR</div>
       <button onClick={login}>Connect wallet</button>
       <button onClick={destroy}>logout</button>
    </div>
  )
}

export default Wallet