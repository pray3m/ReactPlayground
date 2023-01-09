import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    if (incomeText != "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    if (expenseText != "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleIncomeSubmit}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            autoComplete="off"
            placeholder="Add Income..."
            onChange={onChangeIncome}
          />

          <input
            type="number"
            name="incomeAmount"
            placeholder="Add Amount..."
            onChange={onChangeIncome}
          />

          <input type="submit" value="Submit" />
        </div>
      </form>

      <form onSubmit={handleExpenseSubmit}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            autoComplete="off"
            placeholder="Add Expense..."
            onChange={onChangeExpense}
          />

          <input
            type="number"
            name="expenseAmount"
            placeholder="Add Amount..."
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
