import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense.js";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
