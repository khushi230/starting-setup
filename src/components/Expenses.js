import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseArray }) => {
  return (
    <div className="expenses">
      <div>Expense</div>
      {expenseArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description={expense.description}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </div>
  );
};

export default Expenses;
