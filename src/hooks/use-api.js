const { useCallback, useState } = require("react")


const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback( async (city, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=a2bc74e5c3d041c280b174545222905&q=${city}&days=3&aqi=yes&alerts=yes`,
            {method: 'GET'}
            );
        if (!response.ok) {
            throw new Error('Request failed!');
        }
        const data = await response.json();
        applyData(data) // funkcja która wykorzystuje dane
        } catch (err) {
            setError(err.message || 'Something went wrong!');	
        };
        setIsLoading(false);
    }, [])
    return {
        isLoading,
        error,
        sendRequest
    };
};
export default useHttp;


//