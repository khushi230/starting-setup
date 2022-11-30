import React from "react";

const ExpenseForm = ({ setExpenseList }) => {
  const handleAdd = () => {
    console.log("on Click");
  };
  return (
    <div>
      <form>
        <label>Description:</label>
        <input type="text" id="fname" name="fname" />
        <label>Price:</label>
        <input type="number" id="lname" name="lname" />
        <label>Price:</label>
        <input type="date" id="lname" name="lname" />
      </form>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ExpenseForm;
