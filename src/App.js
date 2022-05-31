import Header from "./componets/header/Header";
import Meme from "./componets/meme/Meme";
import classes from './app.module.css';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <Meme />

        
      </div>
    </Fragment>
  );
}

export default App;
// container ma określoną szerokość, szerokość w komponentach w nim 
// określać w %