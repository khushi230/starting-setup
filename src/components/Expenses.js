import React, { useState } from "react";

import "./styles/Expenses.css";
import { expenseArray } from "./utils/utils";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import Title from "./Title";
import LabelBottomNavigation from "./LabelBottomNavigation";

import ExpenseForm from "./ExpenseForm";
const Expenses = () => {
  const [expenses, setExpenses] = useState(expenseArray);
  const saveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevState) => {
      const newExpense = [...prevState];
      newExpense.push(expenseData);
      return newExpense;
    });
  };

  return (
    <Card className="expenses">
      <Title />
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description={expense.description}
          date={expense.date}
          price={expense.price}
        />
      ))}
      <LabelBottomNavigation />
    </Card>
  );
};

export default Expenses;
