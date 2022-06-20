import Header from "./componets/header/Header";
import Weather from "./componets/weather/Weather";
import Forecast from "./componets/forecast/Forecast";
import Hourly from "./componets/hourly/Hourly";
import EntryModal from "./componets/entry-modal/EntryModal";
import classes from './app.module.css';
import { useEffect, useState } from "react";
import WeatherContext from "./data/weather-data-holder";
import { backgroundManager } from "./assets/background-manager/background-manager";


function App() {

// state do przetrzymywania danych pogodowych otrzymanych przez child
  const [weatherData, setWeatherData] = useState(null);
// state obsługujący czy ma się pokazać pogoda
  const [showWeather, setShowWeather] = useState(false);
// state obsługujący czy ma się pokazać forecast
  const [showForecast, setShowForecast] = useState(false);
// state obsługujący czy ma się pokazać przegląd godzinowy pogody
  const [showHourly, setShowHourly] = useState(false);
// state obsługujący czy ma być pokazywany startowy modal
  const [showModal, setShowModal] = useState(true);

// handlery obsługujące pokazywanie zmiane statów co ma być pokazywane userowi
  const forecastHandler = () => {
    setShowForecast(!showForecast);
  };
  const hourlyHandler = () => {
    setShowHourly(!showHourly);
  };

// jeżeli dane zostały pozyskane updatujemy state na ich wartość
  const requestHandler = data => {
    setWeatherData(data);
    backgroundManager(data);
  };

  // useEffect który ma zamknąć modal gdy dane będą inne niż null tzn. wyszuka pogodę bez errorów
  useEffect(() => {
    if (weatherData !== null) {
      setShowForecast(false);
      setShowHourly(false);
      setShowModal(false);
      setShowWeather(true);   
    };
  }, [weatherData])

// obsługiwane jest co ma zostać pokazne userowi
  let whatToShow = <div></div>;    // tutaj może być jakieś fajne background
  if (showForecast && !showHourly) {
    whatToShow = <Forecast onCloseForecast={forecastHandler} />;
  } else if (showHourly && !showForecast) {
    whatToShow = <Hourly onCloseHourly={hourlyHandler} />;
  } else if (showWeather) {
    whatToShow = <Weather showForecast={forecastHandler} showHourly={hourlyHandler} />;
  } else {
    whatToShow = <div></div>;
  };

  
  return (
    <WeatherContext.Provider value={{ data: weatherData }}>
      <div className={classes.main_container}>
        {showModal ? <EntryModal onWeatherRequest={requestHandler} /> : <Header onWeatherRequest={requestHandler} />}
        <div className={classes.container}>
          {whatToShow}
        </div>
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
// container ma określoną szerokość, szerokość w komponentach w nim
// określać w %