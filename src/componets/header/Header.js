import classes from './header.module.css';
import icon from '../../assets/icons/search-icon.png';
import { useState } from 'react';
import useHttp from '../../hooks/use-api';

const Header = (props) => {

// state do wartości w inpucie zmieniana onChange eventem oraz zerowana po udanym wyszukaniu
    const [city, setCity] = useState('');

// state do pokazania errora jeżeli wartość inputa była za krótka lub nie zanaleziono takiego miejsca
    const [showError, setShowError] = useState(false);

    const { sendRequest: weathercheck } = useHttp();
// użyty zostaje custom hook do połącznia się z API zwraca on wewnętrzną funkcje sendRequest którą nazywamy weatherCheck w naszym komponencie
    const dataProvider = (data) => {
        props.onWeatherRequest(data);
    };

// change handler inputu
    const inputChangeHandler = (event) => {
        setCity(event.target.value);
    };

// funkcja egzekwowana gdy user chce wyszukać miasto po kliknięciu na przycisk lub enter w trakcie focusu na input
// w argumentach przesyłane są wartość inputa, funkcja egzekwowana gdy pozyskamy dane, funkcja egzekwowana przez error
// po udanym wyszkaniu wartość input zeruje się
    const searchHandler = () => {
        if (city.length >= 2) {
            setShowError(false);
            weathercheck(city, dataProvider, headerErrorHandler);
            setCity('');
        };
    };

// funkcja w momencie pojawienia się errora
    const headerErrorHandler = () => {
        setShowError(true);
    };

// funkcja handlująca wyszukanie przez kliknięcie enter
    const handleEnterPress = (event) => {
        if (event.code === 'Enter') {
            searchHandler();
        };
    };

// jeżeli pojawił się error to wtedy dodajemy klase invalid do parent diva od inputa
    const ifInvalid = showError ? classes.invalid : '';

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.logo}>Weather meme logo</div>
                <div className={ifInvalid}>
                    <input className={classes.textInput}
                        type='text' placeholder='Search city'
                        value={city} onChange={inputChangeHandler}
                        onKeyPress={handleEnterPress}>
                    </input>
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