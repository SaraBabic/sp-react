import React from 'react';
import './Button.css';
//import styled from 'styled-components';

/*const Button = styled.button`

    color: #ffffff;
    padding: 8px 35px;
    background: #A62120;
    border: 1px solid #FFFFFF;
    border-radius: 40px;

    &:hover{
    border: 2px solid #A62120;
    background: #000000;
    }
`;*/

function Button(props) {
    let btnClass = "red-btn";
    if(props.hasOwnProperty("btnClass")){
        btnClass = props.btnClass;
    }
    return <div><button className={btnClass}>{props.title}</button></div>;
}

export default Button;