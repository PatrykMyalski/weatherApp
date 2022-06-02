import { useContext } from "react";
import WeatherContext from "../../data/weather-data-holder";
import classes from './forecast.module.css'


const Forecast = (props) => {

    const ctx = useContext(WeatherContext);

    return (
        <div className={classes.container}>
            <button type="button" onClick={props.onCloseForecast} className={classes.close}>Close</button>
            <div className={classes.forecast_container}>
                <h2>forecast</h2>
            </div>
        </div>
    )
};

export default Forecast;