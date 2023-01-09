import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpensesList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
