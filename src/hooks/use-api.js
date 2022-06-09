const { useCallback, useState } = require("react")


const useHttp = () => {

    const sendRequest = useCallback( async (city, applyData, errorHandler) => {
        try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=a2bc74e5c3d041c280b174545222905&q=${city}&days=3&aqi=yes&alerts=yes`,
            {method: 'GET'}
            );
        if (!response.ok) {
            errorHandler();          // feedback function that inform about error
            throw new Error('Request failed!');
        };
        const data = await response.json();
        applyData(data);// funkcja która wykorzystuje dane
        } catch (err) {
            return;
        };

    }, []);
    return {
        sendRequest
    };
};
export default useHttp;


