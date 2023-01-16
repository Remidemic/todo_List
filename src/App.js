import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
// import FarmAnimals from "./components/SandBox/FarmAnimals";
// import Fun from "./components/SandBox/Fun"
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    // expense in Expenses.js 22
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 5, 12),
    },
];

const App = () => {
    // const animals = [
    //     'cow 0', 'sheep 1', 'chicken 2', 'pig 3'
    // ]

    // const buttonNames = [
    //     "dont click me 0",
    //     "you clicked me 1",
    // ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense =>{
        setExpenses(prevExpenses =>{
            return [expense, ...prevExpenses]
        });
        console.log('from sahfdjfdjgfdj')
    };

    return (<div>

        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items={expenses} />
        {/* <Fun features={buttonNames} />
        <FarmAnimals farm={animals}/>  */}
    </div>
    );
}

export default App;