import React, { setState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


        // this function is defined in the parent component Expenses.js
    const filterChangeHandler = (event) =>{
        // event.target.value === Expenses.JS 12 selectedYear
        props.onYearChange(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                {/* value= is two way binding, returning inital set state from Expenses.js */}
                <select onChange={filterChangeHandler} value={props.selected} >
                    <option  value='2023'>2023</option>
                    <option  value='2024'>2024</option>
                    <option  value='2025'>2025</option>
                    <option  value='2026'>2026</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;




//  todo : listen to changes - when user selects new state/year, forward to expenses component. 

