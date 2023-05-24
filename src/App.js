import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./redux/store";

function App() {
  return (
    <div>
      <DepositAccount />
      <hr />
      <WithdrawlAccount />
    </div>
  );
}

function DepositAccount() {
  // State is global here
  let { account } = useSelector((state) => state);
  let dispatch = useDispatch();

  let depositHandler = () => {
    dispatch(deposit());
  };

  return (
    <div>
      <h1>Account: CDAC</h1>
      <h1>Balance: {account.balance}</h1>
      <input type="button" value="Deposit" onClick={depositHandler} />
    </div>
  );
}

function WithdrawlAccount() {
  // State is global here
  let { account } = useSelector((state) => state);

  let withdrawHandler = () => {
    // TODO
  };

  return (
    <div>
      <h1>Account: CDAC</h1>
      <h1>Balance: {account.balance}</h1>
      <input type="button" value="Withdraw" onClick={withdrawHandler} />
    </div>
  );
}

export default App;
