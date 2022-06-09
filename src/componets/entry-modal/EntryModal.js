import Backdrop from "../backdrop/Backdrop";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./entryModal.module.css";
import useHttp from "../../hooks/use-api";

const ModalOverlay = (props) => {
    const [city, setCity] = useState('');
    const [showError, setShowError] = useState(false);
    const { sendRequest: weathercheck } = useHttp();

    const inputChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const dataProvider = (data) => {
        props.onWeatherRequest(data)
    };
    const searchHandler = () => {
        if (city.length >= 2) {
            setShowError(false);
            weathercheck(city, dataProvider, modalErrorHandler);
            setCity('');
        };
    };
    const modalErrorHandler = () => {
        setShowError(true);                                        // funkcja do handlingu źle wpisanego miasta
    };
    
    const ifInvalid = showError ? classes.invalid : '';
    return (
        <div className={classes.container}>
            <div className={ifInvalid}>
                <input type='text' placeholder='Search city' onChange={inputChangeHandler}></input>
                {showError && <p>Place not found.</p>}
            </div>
            <div>
                <button type='button' onClick={searchHandler}>Search</button>
            </div>
        </div>
    );
};

const EntryModal = (props) => {

    return (
        <React.Fragment>
            <Backdrop />
            {ReactDOM.createPortal(
                <ModalOverlay onWeatherRequest={props.onWeatherRequest} />,
                document.getElementById('modal-root'))}
        </React.Fragment>
    );
};

export default EntryModal;