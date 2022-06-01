import classes from './header.module.css'
import icon from '../../assets/icons/search-icon.png'
import { useState } from 'react';
import useHttp from '../../hooks/use-api';

const Header = (props) => {
    const [city, setCity] = useState('');
    const {isLoading, error, sendRequest: weathercheck} = useHttp();

    const dataProvider = (data) => {
        props.onWeatherRequest(data)
    };
    const inputChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const searchHandler = () => {
        weathercheck(city, dataProvider);
    };
    return (
        <div className={classes.header}>
            <div className={classes.logo}>Weather meme logo</div>
            <div>
                <input className={classes.textInput} type='text' placeholder='Search city' onChange={inputChangeHandler}></input>
                <button type='button'
                    className={classes.search}
                    onClick={searchHandler}>
                    <img src={icon} alt='Search' />
                </button>
            </div>
        </div>
    )
};

export default Header;