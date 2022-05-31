import meme from "../../assets/memes/meme.png"
import classes from './meme.module.css'
import weatherIcon from '../../assets/weather icons/day/113.png'
import { click } from "@testing-library/user-event/dist/click";

const Meme = (props) => {



    return (
    <div className={classes.container}>
        <button type="button"  className={classes.showWeather} onClick={props.onOpenClick}>Click for more weather information</button>
        <div className={classes.meme}>
            <img src={meme} alt='frozed guy'></img>
        </div>
        <div className={classes.weather}>
            <img src={weatherIcon} alt='sunny'></img>
            <h2>27°C</h2>
            <h2>23 km/h</h2>
            <h2>1000 hPa</h2>  
        </div>
    </div>
    )
};
export default Meme;
