import classes from './header.module.css'
import icon from '../../assets/icons/search-icon.png'

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.icon}>Weather meme icon</div>
            <input className={classes.textInput} type='text' placeholder='Search city'></input>
            <button type='button' className={classes.search}><img src={icon} alt='Search' /></button>
        </div>
    )
};

export default Header;