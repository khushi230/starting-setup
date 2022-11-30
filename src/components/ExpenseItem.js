import React, { useState } from "react";

import "./styles/ExpenseItem.css";
import DateComponent from "./DateComponent";
import Card from "./Card";

const ExpenseItem = ({ description, date, price }) => {
  const [title, setTitle] = useState(description);

  const clickHandler = () => {
    setTitle((prevState) => {
      if (prevState === description) {
        return "updated!";
      } else {
        return description;
      }
    });
  };

  return (
    <Card className="expense-item">
      <DateComponent date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Button
      </button>
    </Card>
  );
};

export default ExpenseItem;
