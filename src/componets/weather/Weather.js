import classes from './weather.module.css'

const Weather = (props) => {
    
    return (
        <div className={classes.container}>
            <button type='button' onClick={props.onHideClick} className={classes.hide}>Hide</button>
            <h2>Weather information</h2>
        </div>
    )
};

export default Weather;


        // city, country
// icon, cloud %,uv ,condition,temp_c ,feelslike, humidity, 
// opady mm, ciśnienie, wind speed, wind direction, air quality check this
// last upadated