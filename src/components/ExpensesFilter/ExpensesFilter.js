import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    //console.log("Hey...dropdown");
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>FilterByYear</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
