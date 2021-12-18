import React, {useState, useEffect} from 'react';

let AccountBalance = () => {
  let [balance, setBalance] = useState(1500);
  let [savingBalance, setSavingBalance] = useState(1349);
  let [notification, setNotification] = useState(false);

  let SavingsHandler = () => {
    if (balance > 1000) {
      setBalance(balance - 100);
      setSavingBalance(savingBalance - 100);
    }
  }

  let SpendingHandler = () => {
    setBalance(balance + 100);
    setSavingBalance(savingBalance - 100);
  }

  useEffect(() => {
    if (balance <= 1000) {
      setNotification(true);
    }
  }, [balance]);

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your account balance:</h4>
          <div className="amount">Rs{balance}</div>
          <button
            className="button is-info"
            onClick={() => SavingsHandler()}
          >
            Send 100Rs
          </button>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your savings balance:</h4>
          <div className="amount savings">Rs{savingBalance}</div>
          <button
            className="button is-info"
            onClick={() => SpendingHandler()}
          >
            Send 100Rs
          </button>
        </div>
      </div>
      {notification && (
        <div className="notification is-danger">
          <button onClick={() => setNotification(false)} className="delete"></button>
          <p>Your account balance is very low.</p>
          <p>You can't transfer more money today.</p>
        </div>
      )}
    </div>
  )
}

export default AccountBalance;