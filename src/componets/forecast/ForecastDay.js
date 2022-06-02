import classes from './forecastDay.module.css';

const ForecastDay = (props) => {

    const day = props.data.day;

    return (
        <div className={classes.container}>
            <h1>{props.data.date}</h1>
            <div className={classes.data_container}>
                <div>
                    <img src={day.condition.icon} alt={day.condition.text}></img>
                    <p>{`${day.maxtemp_c}°C / ${day.mintemp_c}°C`}</p>
                    <p>{`Avreage: ${day.avgtemp_c}°C`}</p>
                    <p>{`UV: ${day.uv}`}</p>
                    <p>{`Max wind speed: ${day.maxwind_kph} kph`}</p>
                    <p>{`Chance for rain: ${day.daily_chance_of_rain}%`}</p>
                    <p>{`Chance for snow: ${day.daily_chance_of_snow}%`}</p>
                    <p>{`Total precipitation: ${day.totalprecip_mm}mm`}</p>
                </div>
            </div>
        </div>
    )
};

export default ForecastDay;