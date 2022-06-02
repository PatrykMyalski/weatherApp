import Header from "./componets/header/Header";
import Meme from "./componets/meme/Meme";
import Weather from "./componets/weather/Weather";
import Forecast from "./componets/forecast/Forecast";
import Hourly from "./componets/hourly/Hourly";
import classes from './app.module.css';
import { Fragment, useState } from "react";
import WeatherContext from "./data/weather-data-holder";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [showForecast, setShowForecast] = useState(false); 
  const [showHourly, setShowHourly] = useState(false); 
  const weatherHandler = () => {
    setShowWeather(!showWeather);
  };
  const forecastHandler = () => {
    setShowForecast(!showForecast);
  }
  const hourlyHandler = () => {
    setShowHourly(!showHourly);
  };
  const requestHandler = data => {
    setWeatherData(data);
  };

  let whatToShow = <Meme onOpenClick={weatherHandler} />
  if (showForecast && !showHourly) {
    whatToShow = <Forecast onCloseForecast={forecastHandler}/> 
  } else if (showHourly && !showForecast) {
    whatToShow = <Hourly onCloseHourly={hourlyHandler} /> 
  } else if (showWeather)  {
    whatToShow = <Weather onHideClick={weatherHandler} showForecast={forecastHandler} showHourly={hourlyHandler}/>
  } else {
    whatToShow = <Meme onOpenClick={weatherHandler} />
  }

  return (
    <WeatherContext.Provider value={{ data: weatherData }}>
      <Header onWeatherRequest={requestHandler} />
      <div className={classes.container}>
        {whatToShow}
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
// container ma określoną szerokość, szerokość w komponentach w nim
// określać w %