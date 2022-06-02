import meme from "../../assets/memes/meme.png"
import classes from './meme.module.css'
import weatherIcon from '../../assets/weather icons/day/113.png'
import { click } from "@testing-library/user-event/dist/click";
import { useContext } from "react";
import WeatherContext from "../../data/weather-data-holder";
import WeatherShowCase from "./WeatherShowCase";


const Meme = (props) => {

    const ctx = useContext(WeatherContext)
    console.log(ctx)

    return (
    <div className={classes.container}>
        <button type="button" disabled={ctx.data === null} className={classes.showWeather} onClick={props.onOpenClick}>Click for more weather information</button>
        <div className={classes.meme}>
            <img src={meme} alt='frozed guy'></img>
        </div>
        {ctx.data !== null && <WeatherShowCase value={ctx}/>}
    </div>
    )
};
export default Meme;
