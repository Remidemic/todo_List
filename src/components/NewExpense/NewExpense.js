import React, { useState }from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

   const [isEditing, setIsEditing] = useState(false)

    // this is the function that will trigger when something happens in the child component, passing data from child to parent 

    // this function is not exexuted in NewExpense component but it lives here. the function is executed in the child component ExpenseForm.
    // making this function is step 1. step 2 is using this function in the child component 
    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData + "this is where id is made")
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler = () =>{
        setIsEditing(true)
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
                {/* the value of onSave prop should be function that can be called in the child component  */}
            
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense </button>}
            {isEditing && (
            <ExpenseForm 
            onSaveExpenseDataNewVar={SaveExpenseDataHandler}
            onCancel = {stopEditingHandler} />) }
        </div>
    )
};

export default NewExpense

// passing data from child to parent. make a new prop on Expense form, the value of which will be a function will be triggered when something happens INISIDE that component.  "saveExpenseDataHandler" will be triggered when something happens INSIDE ExpenseForm.   