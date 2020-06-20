import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';




export const AddTransaction = () => {
  const { addTransction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, SetAmount] = useState(0);

  const handleAction = (event) => {

    event.preventDefault();
    const newTransction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransction(newTransction)
  }
 
  return (

    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleAction}>
        <div className="form-control">
          <label htmlFor="text">Deception</label>
          <input type="text"
            placeholder="Enter Deception..."
            id="text"
            value={text}
            onChange={(newTransction) => setText(newTransction.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"
            placeholder="Enter amount..."
            id="amount"
            value={amount}
            onChange={(newTransction) => SetAmount(newTransction.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
