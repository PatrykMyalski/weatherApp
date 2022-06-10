const { useCallback } = require("react")

// custom hook odpowiadający za połączenie z API 
const useHttp = () => {

// umieszczone jest to w callbacku aby uniknąć niepotrzebnej ilości api calls
    const sendRequest = useCallback( async (city, applyData, errorHandler) => {
        try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=a2bc74e5c3d041c280b174545222905&q=${city}&days=3&aqi=yes&alerts=yes`,
            {method: 'GET'}
            );
// jeżeli nie udało się pozyskać danych jest egzekwowana funkcja zdefiniowana w komponencie używającym custom hooka, oraz wyrzucany jest error
        if (!response.ok) {
            errorHandler();          
            throw new Error('Request failed!');
        };
        const data = await response.json();
// funkcja zdefiniowana w komponencie używającym hooka, jest egzekwowana po przekonwertowaniu danych do json
        applyData(data);
        } catch (err) {
            return;
        };

    }, []);
    return {
// zwracamy funkcje wykonującą API call
        sendRequest
    };
};
export default useHttp;


