import { useContext } from 'react';
import classes from './weather.module.css';
import WeatherContext from '../../data/weather-data-holder';

// komponent wyświetla pogodę na obecną chwilę, pozwala na przejście do forecastu lub godzinowej pogody
const Weather = (props) => {

// pozyskiwany jest context
    const ctx = useContext(WeatherContext);
    const current = ctx.data.current;
    const astro = ctx.data.forecast.forecastday[0].astro;
    
    
    return (
        <div className={classes.container}>
            <div className={classes.btn_container}>
                <button type='button' onClick={props.showHourly} className={classes.btn}>Hourly</button>
                <button type='button' onClick={props.showForecast} className={classes.btn}>Forecast</button>
            </div>
            <div className={classes.baseInformation}>
                <h2>{`Country: ${ctx.data.location.country} `}</h2>
                <h2>{`City: ${ctx.data.location.name}`}</h2>
                <h2>{`Last update: ${current.last_updated}`}</h2>
            </div>
            <div className={classes.moreData}>
                <div className={classes.temp}>
                    <img src={current.condition.icon} alt={current.condition.text}></img>
                    <p>{`${current.temp_c}°C feels like ${current.feelslike_c}°C`}</p>
                    <p>{`Wind: ${current.wind_kph}km/h`}</p>
                </div>
                <div className={classes.clouds}>
                    <p>{`Clouds: ${current.cloud}%`}</p>
                    <p>{`UV: ${current.uv}`}</p>
                </div>
                <div className={classes.rain}>
                    <p>{`Humidity: ${current.humidity}%`}</p>
                    <p>{`Percipient rain: ${current.precip_mm}mm`}</p>
                    <p>{`Pressure: ${current.pressure_mb} hPa`}</p>
                </div>
                <div className={classes.astro}>
                    <p>{`Sunrise: ${astro.sunrise}, Sunset: ${astro.sunset}`}</p>
                    <p>{`Moonrise: ${astro.moonrise}, Moonset: ${astro.moonset}`}</p>
                    <p>{`Moon phase: ${astro.moon_phase}`}</p>
                </div>
            </div>
        </div>
    )
};

export default Weather;


        // "city, country"
// "icon," "cloud %",uv ",condition,temp_c ,feelslike", "humidity," 
// "opady mm, ciśnienie", wind speed, wind direction, air quality check this
// "last upadated"