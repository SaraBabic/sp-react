import React from 'react';
import './NavigationAuto.css';

function NavigationAuto(props){
    const buttons = [1, 2, 3, 4, 5];
    return (
        <div className="navigation-auto">
            {buttons.map(btnNumber =>{
                let btnClass = "auto-btn" + btnNumber;
                return <div className={btnClass} key={btnNumber}></div>
            })}
        </div>
    );
}

export default NavigationAuto;