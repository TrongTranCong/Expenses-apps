import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const expensesFilter = (filterYear) => {
    setFilterYear(filterYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} expensesFilter={expensesFilter} />
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}
