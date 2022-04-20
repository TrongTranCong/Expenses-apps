import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense({ newExpense }) {
  const [show, setShow] = useState(false);
  const newExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    newExpense(newExpenseData);
    setShow(false)
  };
  const showHandler = ()=>{
    setShow(true)
  }
  const hiddenHandler = ()=>{
    setShow(false)
  }
  return (
    <div className="new-expense">
      {!show && <button onClick={showHandler}>Add new expenses</button>}
      {show && <ExpenseForm expenseForm={newExpenseDataHandler} onCancel={hiddenHandler}/>}
    </div>
  );
}
