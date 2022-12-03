import React from "react";
import './styles/Form.css'
import  AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Stack } from "@mui/system";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div>
          <label className="new-expense__control label">Description</label>
          <input className="new-expense__control input" type="text"></input>
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">Amount</label>
          <input className="new-expense__control input" type="number"></input>
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">Date</label>
          <input className="new-expense__control input" type="date"></input>
        </div>
        
        <Stack direction="row" className="new-expense__button">
          <button className="add-button" type="submit">
            <AddCircleRoundedIcon fontSize="large" color="success" />
          </button>
         
        </Stack>
      </div>
    </form>
  );
};
export default ExpenseForm;
