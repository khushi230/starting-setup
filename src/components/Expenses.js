import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import Card from "./Card";
import ExpenseForm from "./ExpenseForm";

const Expenses = ({ expenseArray }) => {
  const [expenseList, setExpenseList] = useState(expenseArray);
  return (
    <Card className="expenses">
      <ExpenseForm setExpenseList={setExpenseList} />
      <div>Expense</div>
      {expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description={expense.description}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
