import './Fun.css'
import React, { useState } from 'react';

function Fun(props) {

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
    </div>
}
export default Fun