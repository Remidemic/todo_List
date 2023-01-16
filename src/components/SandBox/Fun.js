import './Fun.css'
import React, { useState } from 'react';

function Fun(props) {

    const arr = [1,2,3,4,5,6,7,8,9,0]

    const [buttons, setButtons] = useState(props.features[0]);

    const clickHandler = () => {

        let title = props.features[1]
        setButtons(props.features[1])
        console.log(title)
        window.alert('WHY U TOUCH ME?!?!?!?!')
    }

    return  <div>

        <button className='fun' onClick={clickHandler}> {buttons} </button>
        <p> i think this works </p>
        <p>{arr.map((x)=> (x*5 + " , "))}</p>

    </div>
}
export default Fun