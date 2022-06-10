import React from "react";
import ReactDOM from "react-dom";
import classes from "./hourlyForecast.module.css";
import Backdrop from "../backdrop/Backdrop";
import HourlyCard from "./HourlyCard";

const ModalOverlay = (props) => {

// mapujemy przez array z forecastem i umieszczamy na stronie tylko te nieparzyste
    let cards = props.data.map((item, index) => {
        if (index % 2 === 1) {
            return <HourlyCard key={Math.random()} data={item} />;
        };
    });
    return (
        <div className={classes.hourly_forecast}>
            <div className={classes.container}>
                {cards}
            </div>
            <button type='button' onClick={props.onClick}>Close</button>
        </div>
    );
};


// modal z portalem
const HourlyForecast = (props) => {

    return (
        <React.Fragment>
            <Backdrop onClick={props.onClick}/> 
            {ReactDOM.createPortal(
            <ModalOverlay data={props.data} onClick={props.onClick} />,
            document.getElementById('modal-root'))}
        </React.Fragment>
    );
};

export default HourlyForecast;
