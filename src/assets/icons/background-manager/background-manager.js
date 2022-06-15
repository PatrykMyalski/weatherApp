const sunny = "linear-gradient(to right bottom, #ffff00, #b7ff63, #6effa3, #0affd9, #00ffff)";
const cloudy = "linear-gradient(6deg, rgba(0,90,167,1), rgba(255,255,255,1))";
const partly = "linear-gradient(to right bottom, #ffff00, #ffdf6c, #ffd2be, #ffdef6, #ffefff, #f7eaff, #ede6fe, #e1e2fe, #c5cefe, #a2bcff, #73abff, #009cff)"

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
