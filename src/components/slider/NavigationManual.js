import React from 'react';
import './NavigationManual.css';

function NavigationManual(props){
    const buttons = [1, 2, 3, 4, 5];
    return (
        <div className="navigation-manual">
            {buttons.map(btnNumber =>{
                let forAttr = "radio" + btnNumber;
                return <label htmlFor={forAttr} className="manual-btn" key={btnNumber}></label>
            })}
        </div>
    );
}

export default NavigationManual;