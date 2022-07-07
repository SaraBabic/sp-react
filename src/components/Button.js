import './Button.css';

function Button(props) {
    let btnClass = "red-btn";
    if(props.hasOwnProperty("btnClass")){
        btnClass = props.btnClass;
    }
    return <div><button className={btnClass}>{props.title}</button></div>;
}

export default Button;