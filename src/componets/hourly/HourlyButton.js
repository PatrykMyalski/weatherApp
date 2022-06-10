

const HourlyButton = (props) => {

// definiujemy button aby móc go użyć wielokrotnie 
    return (
        <div>
            <button type="button" onClick={props.onBtnClick}>{props.date}</button>
        </div>
    );
};

export default HourlyButton;