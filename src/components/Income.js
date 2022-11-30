import React from "react";
import IncomeItem from "./IncomeItem";
import "./styles/Expenses.css";
import Card from "./Card";

const Income = ({ incomeArray }) => {
  return (
    <Card className="expenses">
      <div>Income</div>
      {incomeArray.map((income) => (
        <IncomeItem
          key={income.id}
          description={income.description}
          date={income.date}
          credit={income.credit}
        />
      ))}
    </Card>
  );
};

export default Income;
