import React from "react";

import "./ExpenseItem.css";
import DateComponent from "./DateComponent";

const ExpenseItem = ({ description, date, price }) => {
  return (
    <div className="expense-item">
      <DateComponent date={date} />

      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
