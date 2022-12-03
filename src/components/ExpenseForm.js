import React from "react";
import { useState } from "react";

import "./styles/Form.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Stack } from "@mui/system";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const descriptionChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      description: enteredText,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredText("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div>
            <label className="new-expense__control label">Description</label>
            <input
              className="new-expense__control input"
              value={enteredText}
              type="text"
              onChange={descriptionChangeHandler}
            ></input>
          </div>
          <div className="new-expense__controls">
            <label className="new-expense__control label">Amount</label>
            <input
              className="new-expense__control input"
              value={enteredAmount}
              type="number"
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__controls">
            <label className="new-expense__control label">Date</label>
            <input
              className="new-expense__control input"
              value={enteredDate}
              type="date"
              onChange={dateChangeHandler}
            ></input>
          </div>

          <Stack direction="row" className="new-expense__button">
            <button className="add-button" type="submit">
              <AddCircleRoundedIcon fontSize="large" color="success" />
            </button>
          </Stack>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
