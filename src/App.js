import Expenses from "./components/Expenses/Expenses";
import FarmAnimals from "./components/FarmAnimals";
import Fun from "./components/Fun"
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

    const animals = [
        'cow 0', 'sheep 1', 'chicken 2', 'pig 3'
    ]

    const buttonNames = [
        "dont click me 0",
        "you clicked me 1",
    ];

    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const addExpenseHandler = expense =>{
        console.log("in App.js");
        console.log(expense)
    };

    return (<div>
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items={expenses} />
        <Fun features={buttonNames} />
        <FarmAnimals farm={animals}/> 
    </div>
    );
}

export default App;