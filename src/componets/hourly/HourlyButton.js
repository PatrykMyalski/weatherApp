

const HourlyButton = (props) => {


    return (
        <div>
            <button type="button" onClick={props.onBtnClick}>{props.date}</button>
        </div>
    );
};

export default HourlyButton;