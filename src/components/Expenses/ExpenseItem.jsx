import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

/* messing with price changes using state

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount); // this is what price is origninally.

  // variable for the price increase
  const increase = () => {
    let newPrice = price + 5; // new price i want it to be.
    setPrice(newPrice);
  };
  const decrease = () => {
    if (price > 0) {
      let newPrice = price - 5; // new price i want it to be.
      setPrice(newPrice);
    } else {
      setPrice(0);
    }
  };

  const add = () => {
    setTitle("Updated!!");
    setPrice(increase); // calling the var newPrice
  };
  const subtract = () => {
    setTitle("Updated!!");
    setPrice(decrease); // calling the var newPrice
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </Card>
  );
*/

/* 
 
*/
