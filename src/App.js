import { useState } from "react";

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
  let [balance, setBalance] = useState(1000);

  let depositHandler = () => {
    let newBalance = balance + 100;
    setBalance(newBalance);
  };

  return (
    <div>
      <h1>Account: CDAC</h1>
      <h1>Balance: {balance}</h1>
      <input type="button" value="Deposit" onClick={depositHandler} />
    </div>
  );
}

function WithdrawlAccount() {
  let [balance, setBalance] = useState(1000);

  let withdrawHandler = () => {
    let newBalance = balance - 100;
    setBalance(newBalance);
  };

  return (
    <div>
      <h1>Account: CDAC</h1>
      <h1>Balance: {balance}</h1>
      <input type="button" value="Withdraw" onClick={withdrawHandler} />
    </div>
  );
}

export default App;
