import { useContext, useReducer, useState } from 'react';
import classes from './hourly.module.css';
import WeatherContext from '../../data/weather-data-holder';
import HourlyButton from './HourlyButton';
import HourlyForecast from './HourlyForecast';


// reducer obsługujący wyświetlanie się modali z forecastem godzinowym 
const hourlyReducer = (state, action) => {

// bierze action.type który określa który przycisk został aktywowany i który forecast ma być pokazany
    switch (action.type) {
        case "FIRST":
            return { firstHourly: !state.firstHourly, secondHourly: false, thirdHourly: false };
        case "SECOND":
            return { firstHourly: false, secondHourly: !state.secondHourly, thirdHourly: false };
        case "THIRD":
            return { firstHourly: false, secondHourly: false, thirdHourly: !state.thirdHourly };
        default:
            return { ...state };
    };
};

const Hourly = (props) => {

// przywołujemy context
    const ctx = useContext(WeatherContext);
    const arrWithDays = ctx.data.forecast.forecastday;

// definiowany jest useReducer 
    const [hourlyState, dispatchHourly] = useReducer(hourlyReducer, {
        firstHourly: false,
        secondHourly: false,
        thirdHourly: false
    });

// button handlery którę dispatch'ują action z odpowiednim type'm po kliknięciu 
    const firstBtnHandler = () => {
        dispatchHourly({ type: "FIRST" });
    };

    const secondBtnHandler = () => {
        dispatchHourly({ type: "SECOND" });
    };

    const thirdBtnHandler = () => {
        dispatchHourly({ type: "THIRD" });
    };

    return (
        <div className={classes.container}>
            <button type="buton" onClick={props.onCloseHourly} >Close</button>
            <div className={classes.hourly}>
                <div>
                    <HourlyButton date={arrWithDays[0].date} onBtnClick={firstBtnHandler} />
                </div>
                <div>
                    <HourlyButton date={arrWithDays[1].date} onBtnClick={secondBtnHandler} />
                </div>
                <div>
                    <HourlyButton date={arrWithDays[2].date} onBtnClick={thirdBtnHandler} />
                </div>
            </div>
            {hourlyState.firstHourly && <HourlyForecast data={arrWithDays[0].hour} onClick={firstBtnHandler} />}
            {hourlyState.secondHourly && <HourlyForecast data={arrWithDays[1].hour} onClick={secondBtnHandler} />}
            {hourlyState.thirdHourly && <HourlyForecast data={arrWithDays[2].hour} onClick={thirdBtnHandler} />}
        </div>
    );
};

export default Hourly;