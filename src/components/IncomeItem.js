import React from "react";
import "./ExpenseItem.css";
import DateComponent from "./DateComponent";

const IncomeItem = ({ description, credit, date }) => {
  return (
    <div className="expense-item">
      <DateComponent date={date} />

      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">{credit}</div>
      </div>
    </div>
  );
};

export default IncomeItem;
