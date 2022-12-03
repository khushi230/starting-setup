import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import Card from "./Card";
import NewExpense from "./NewExpense";
import Title from "./Title";
import BottomNavigation from "@mui/material/BottomNavigation";
import LabelBottomNavigation from "./LabelBottomNavigation";
const Expenses = ({ expenseArray }) => {
  
  return (
    <Card className="expenses">
      <Title />
      <NewExpense />

      {expenseArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description={expense.description}
          date={expense.date}
          price={expense.price}
        />
      ))}
      <LabelBottomNavigation/>
    </Card>
  );
};

export default Expenses;
