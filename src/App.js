import Header from "./componets/header/Header";
import Weather from "./componets/weather/Weather";
import Forecast from "./componets/forecast/Forecast";
import Hourly from "./componets/hourly/Hourly";
import EntryModal from "./componets/entry-modal/EntryModal";
import classes from './app.module.css';
import { useEffect, useState } from "react";
import WeatherContext from "./data/weather-data-holder";



function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const [showHourly, setShowHourly] = useState(false);
  const [showModal, setShowModal] = useState(true);


  const weatherHandler = () => {
    setShowWeather(!showWeather);
  };

  const forecastHandler = () => {
    setShowForecast(!showForecast);
  };

  const hourlyHandler = () => {
    setShowHourly(!showHourly);
  };

  const requestHandler = data => {
    setWeatherData(data);
  };

  // useEffect który ma zamknąć modal gdy data będzie inna niż null tzn. wyszuka pogodę bez errorów
  useEffect(() => {
    if (weatherData !== null) {
      setShowModal(false);
      setShowWeather(true);   
    };
  }, [weatherData])

  
  let whatToShow = <div></div>;    // tutaj może być jakieś fajne background
  if (showForecast && !showHourly) {
    whatToShow = <Forecast onCloseForecast={forecastHandler} />;
  } else if (showHourly && !showForecast) {
    whatToShow = <Hourly onCloseHourly={hourlyHandler} />;
  } else if (showWeather) {
    whatToShow = <Weather onHideClick={weatherHandler} showForecast={forecastHandler} showHourly={hourlyHandler} />;
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