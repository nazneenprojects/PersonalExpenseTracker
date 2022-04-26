import "./ExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = (props) => {
  // #1 adding multiple states
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log("Hey...lets add data");
    //console.log(event.target.value);
    setEnteredtitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // -------------#2 Set the state Individually----------------
  //   const [userInput, setUserInput] = useState({
  //     enteredtitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     //#2 not preferred way in multiple state
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredtitle: event.target.value,
  //     // });

  //     //#3 - correct way
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredtitle: event.target.value };
  //     });
  //   };

  //   const amountChangedHandler = (event) => {
  //     //   #2  not preferred way in multiple state
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredAmount: event.target.value,
  //     // });

  //     //#3 - correct way
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: event.target.value };
  //     });
  //   };
  //   const dateChangedHandler = (event) => {
  //     //   #2 not preferred way in multiple state
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredDate: event.target.value,
  //     // });

  //     //#3 - correct way
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: event.target.value };
  //     });
  //   };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredtitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new=expense-controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>

        <div className="new-expense-actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
