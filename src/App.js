import Header from "./componets/header/Header";
import Meme from "./componets/meme/Meme";
import Weather from "./componets/weather/Weather";
import classes from './app.module.css';
import { Fragment, useState } from "react";
import WeatherContext from "./data/weather-data-holder";

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [showWeather, setShowWeather] = useState(false);
  const weatherHandler = () => {
    setShowWeather(!showWeather);
  };
  const requestHandler = data => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{data: weatherData}}>
      <Header onWeatherRequest={requestHandler}/>
      <div className={classes.container}>
        {showWeather ? <Weather onHideClick={weatherHandler} /> : <Meme onOpenClick={weatherHandler}/>}  
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
// container ma określoną szerokość, szerokość w komponentach w nim 
// określać w %