import { useContext } from "react";
import WeatherContext from "../../data/weather-data-holder";
import classes from './forecast.module.css';
import ForecastDay from "./ForecastDay";


const Forecast = (props) => {

    const ctx = useContext(WeatherContext);

    return (
        <div className={classes.container}>
            <button type="button" onClick={props.onCloseForecast} className={classes.close}>Close</button>
            <div className={classes.forecast_container}>
                <ForecastDay data={ctx.data.forecast.forecastday[0]}/>
                <ForecastDay data={ctx.data.forecast.forecastday[1]}/>
                <ForecastDay data={ctx.data.forecast.forecastday[2]}/>
            </div>
        </div>
    )
};

export default Forecast;