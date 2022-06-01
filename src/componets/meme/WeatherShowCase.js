import classes from './meme.module.css'

const WeatherShowCase = (props) => {
    return (
        <div className={classes.weather}>
            <img src={props.value.data.current.condition.icon} alt={props.value.data.current.condition.text}></img>
            <h2>{`${props.value.data.current.temp_c}°C`}</h2>
            <h2>{`${props.value.data.current.wind_kph}km/h`}</h2>
            <h2>{`${props.value.data.current.pressure_mb}hPa`}</h2>      
        </div>
    )
};
export default WeatherShowCase;
