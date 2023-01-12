
import React, { useState } from "react";

const FarmAnimals = (props) => {

    // Which one is which????

    // animals == useState(animals)
    // setAnimals == whats inside of click handler 

    const [animals, setAnimals] = useState(props.farm[0])

    const clickHandler = () => {
        setAnimals(props.farm[1]);
        console.log('animals works')
    }


    return <div>



        <ol>
            <li>{props.farm[0]}</li>
            <li>{props.farm[1]}</li>
            <li>{props.farm[2]}</li>
            <li>{props.farm[3]}</li>
            <li>{animals}</li>
        </ol>
        <button onMouseEnter={clickHandler}>{animals}</button>
    </div>
};

export default FarmAnimals;