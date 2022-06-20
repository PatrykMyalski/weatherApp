const sunny = "linear-gradient(to right bottom, rgba(255,255,0,1) 0%, rgba(181,248,255,1) 50%, rgba(0,164,255,1) 100%)";
const cloudy = "linear-gradient(6deg, rgba(0,90,167,1), rgba(255,255,255,1))";
const partly = "linear-gradient(to right bottom, #ffff00, #ffdf6c, #ffd2be, #ffdef6, #ffefff, #f7eaff, #ede6fe, #e1e2fe, #c5cefe, #a2bcff, #73abff, #009cff)";

export const backgroundManager = (data) => {
    const currentWeather = data.current.condition.text;
    const gradientChanger = () => {
        if (currentWeather === "Sunny") {
            return sunny;
        } else if (currentWeather.includes("Partly")) {
            return partly;
        } else {
            return cloudy;
        };
    }; 
    document.body.style.background = `${gradientChanger()} fixed`;
};


