import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import MultiExpenseItem from "./components/Expenses/MultiExpenseItem";
import { useState } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Pertol",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New Phone", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Grocery",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//function App()
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    //console.log("-----------------in App.js ----------------");
    // console.log(expense);
    // setExpenses([expense, ...expenses]); not correct

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <MultiExpenseItem expenses={expenses}></MultiExpenseItem>
    </div>
  );
};
export default App;
