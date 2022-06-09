

const HourlyCard = (props) => {

    const data = props.data;

    return (
        <div>
            <img src={data.condition.icon} alt={data.condition.text}/>
            <p>{`${data.temp_c}°C / ${data.feelslike_c}°C` }</p>
            <p>{`${data.precip_mm}mm`}</p>
            <p>{`${data.wind_kph}kph`}</p>
            <p>{`${data.pressure_mb}hPa`}</p>
            <h2>{data.time.slice(11)}</h2>
        </div>
    );
};

export default HourlyCard;