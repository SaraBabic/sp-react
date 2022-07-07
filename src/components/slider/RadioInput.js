import React from 'react';

function RadioInput(props){
    const buttons = [1, 2, 3, 4, 5];
    return(
        buttons.map(btnNumber =>{
                let btnId = "radio" + btnNumber;
                return <input type="radio" name="radio-btn" id={btnId} key={btnNumber}/>
            })
    );
}

export default RadioInput;