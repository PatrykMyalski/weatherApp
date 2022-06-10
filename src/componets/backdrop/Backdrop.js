import classes from './backdrop.module.css'
import React from "react";
import ReactDOM from "react-dom";



// Backdrop przeznaczony do wielokrotnego użytku 
const Backdrop = (props) => {

// przeniesiony createPortalem aby nie był nested w DOM'ie
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
            <div className={classes.backdrop} onClick={props.onClick} />,
            document.getElementById('backdrop-root'))}
        </React.Fragment>
    )    
}

export default Backdrop;
