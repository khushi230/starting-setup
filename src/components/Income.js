import React from "react";
import IncomeItem from "./IncomeItem";
import "./Expenses.css";

const Income = ({ incomeArray }) => {
  return (
    <div className="expenses">
      <div>Income</div>
      {incomeArray.map((income) => (
        <IncomeItem
          key={income.id}
          description={income.description}
          date={income.date}
          credit={income.credit}
        />
      ))}
    </div>
  );
};

export default Income;
