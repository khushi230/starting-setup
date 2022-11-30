import React from "react";
import "./styles/ExpenseItem.css";
import DateComponent from "./DateComponent";
import Card from "./Card";

const IncomeItem = ({ description, credit, date }) => {
  return (
    <Card className="expense-item">
      <DateComponent date={date} />

      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">{credit}</div>
      </div>
      <button>Button</button>
    </Card>
  );
};

export default IncomeItem;
