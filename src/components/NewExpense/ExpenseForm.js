import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm({expenseForm,onCancel}) {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };
    expenseForm(expenseData)
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };
  const titleChangeHandler = (e) => {
    setTitleInput(e.target.value);
    // setUserInput({ ...userInput, title: e.target.value });
  };
  const amountChangeHandler = (e) => {
    setAmountInput(e.target.value);
    // setUserInput({ ...userInput, amount: e.target.value });
  };
  const dateChangeHandler = (e) => {
    setDateInput(e.target.value);
    // setUserInput({ ...userInput, date: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={titleInput} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountInput}
            min={0.01}
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateInput}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
