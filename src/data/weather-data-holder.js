import React from "react";

// Context urzymujący dane o pogodzie
const WeatherContext = React.createContext({
    data: null,
});

export default WeatherContext;