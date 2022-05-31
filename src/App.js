import Header from "./componets/header/Header";
import Meme from "./componets/meme/Meme";
import Weather from "./componets/weather/Weather";
import classes from './app.module.css';
import { Fragment, useState } from "react";

function App() {
  const [showWeather, setShowWeather] = useState(false);
  const weatherHandler = () => {
    setShowWeather(!showWeather);
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        
        {showWeather ? <Weather onHideClick={weatherHandler} /> : <Meme onOpenClick={weatherHandler}/>}

        
      </div>
    </Fragment>
  );
};

export default App;
// container ma określoną szerokość, szerokość w komponentach w nim 
// określać w %