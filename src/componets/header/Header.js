import classes from './header.module.css';
import icon from '../../assets/icons/search-icon.png';
import { useState } from 'react';
import useHttp from '../../hooks/use-api';

const Header = (props) => {
    const [city, setCity] = useState('');
    const [showError, setShowError] = useState(false);
    const { sendRequest: weathercheck } = useHttp();

    const dataProvider = (data) => {
        props.onWeatherRequest(data);
    };
    const inputChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const searchHandler = () => {
        if (city.length >= 2) {
            setShowError(false);
            weathercheck(city, dataProvider, headerErrorHandler);
            setCity('');
        };
    };
    const headerErrorHandler = () => {
        setShowError(true);
    };

    const ifInvalid = showError ? classes.invalid : '';
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.logo}>Weather meme logo</div>
                <div className={ifInvalid}>
                    <input className={classes.textInput} type='text' placeholder='Search city' value={city} onChange={inputChangeHandler}></input>

                    <button type='button'
                        className={classes.search}
                        onClick={searchHandler}>
                        <img src={icon} alt='Search' />
                    </button>
                    {showError && <p>Cannot find place.</p>}
                </div>
            </div>
        </div>
    );
};

export default Header;