import React from "react";
import "./DateComponent.css";
const DateComponent = ({ date }) => {
  return (
    <div className="expense-date">
      <div className="expense-date__day">{date.getDate()}</div>
      <div className="expense-date__month">
        {date.toLocaleString("en-US", { month: "long" })}{" "}
      </div>
      <div className="expense-date__year">{date.getFullYear()} </div>
    </div>
  );
};
export default DateComponent;
