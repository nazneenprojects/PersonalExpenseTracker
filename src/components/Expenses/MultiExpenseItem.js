import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

//function MultiExpenseItem(props)
const MultiExpenseItem = (props) => {
  const [filteredYear, SetFilteredYear] = useState("2020");
  //console.log(filteredYear);

  const getYearChangeHandler = (expenseYear) => {
    //console.log("-----------------in MultiExpenseItem.js ----------------");
    //console.log(expenseYear);
    SetFilteredYear(expenseYear);
  };

  // filter year wise
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={getYearChangeHandler}
        />
        <ExpenseChart expitems={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default MultiExpenseItem;
