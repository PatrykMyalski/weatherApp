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