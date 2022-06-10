import { useContext } from "react";
import WeatherContext from "../../data/weather-data-holder";
import classes from './forecast.module.css';
import ForecastDay from "./ForecastDay";


const Forecast = (props) => {

// pobieramy Context 
    const ctx = useContext(WeatherContext);

// każdy element w array z dniami odpowiada jednemu dniu, do każdej pozycji w arr jest tworzony komponent który w props ma wysyłane dane ze swojego dnia 
// można również użyć map function
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