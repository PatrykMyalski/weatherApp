import Backdrop from "../backdrop/Backdrop";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./entryModal.module.css";
import useHttp from "../../hooks/use-api";

const ModalOverlay = (props) => {

// state do wartości w inpucie zmieniana onChange eventem oraz zerowana po udanym wyszukaniu
    const [city, setCity] = useState('');  
// state do pokazania errora jeżeli wartość inputa była za krótka lub nie zanaleziono takiego miejsca
    const [showError, setShowError] = useState(false);
// użyty zostaje custom hook do połącznia się z API zwraca on wewnętrzną funkcje sendRequest którą nazywamy weatherCheck w naszym komponencie
    const { sendRequest: weatherCheck } = useHttp();

// change handler inputu
    const inputChangeHandler = (event) => {
        setCity(event.target.value);
    };

// przesyłamy wartość zwróconą przez nasze API do app komponentu
    const dataProvider = (data) => {
        props.onWeatherRequest(data)
    };

// funkcja egzekwowana gdy user chce wyszukać miasto po kliknięciu na przycisk lub enter w trakcie focusu na input
// w argumentach przesyłane są wartość inputa, funkcja egzekwowana gdy pozyskamy dane, funkcja egzekwowana przez error
// po udanym wyszkaniu wartość input zeruje się
    const searchHandler = () => {
        if (city.length >= 2) {
            setShowError(false);
            weatherCheck(city, dataProvider, modalErrorHandler); 
            setCity('');
        } else if (city.length < 2) {
            setShowError(true);
        };
    };

// funkcja w momencie pojawienia się errora
    const modalErrorHandler = () => {
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
        <div className={classes.container} >
            <div className={ifInvalid}>
                <input type='text' placeholder='Search city' onChange={inputChangeHandler} onKeyPress={handleEnterPress}></input>
                {showError && <p>Place not found.</p>}
            </div>
            <div>
                <button type='button' onClick={searchHandler}>Search</button>
            </div>
        </div>
    );
};


// łączymy komponent Backdrop z stworzonym przez nas Modalem i tworzymy portal, aby Modal nie był nested w DOM'ie
const EntryModal = (props) => {
    return (
        <React.Fragment>
            <Backdrop />
            {ReactDOM.createPortal(
                <ModalOverlay onWeatherRequest={props.onWeatherRequest} />,
                document.getElementById('modal-root'))}
        </React.Fragment>
    );
};

export default EntryModal;