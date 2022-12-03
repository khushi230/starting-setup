import React, { useState } from "react";

import "./styles/ExpenseItem.css";
import DateComponent from "./DateComponent";
import Card from "./Card";
import DeleteIcon from "@mui/icons-material/Delete";
import SelectTextFields from "./Price";
import InputAdornments from "./NewPrice"
const ExpenseItem = ({ description, date, price }) => {
  

  return (
    <Card className="expense-item">
      <DateComponent date={date} />
      <div className="expense-item__description">
        <h2>{description}</h2>

        {/* <SelectTextFields /> */}
        <InputAdornments/>
      </div>
      

      <button className="btn">
        <i ><DeleteIcon/></i>
      </button>

      <form>
        <div>
          <input type="checkbox" />
        </div>
      </form>
    </Card>
  );
};

export default ExpenseItem;
