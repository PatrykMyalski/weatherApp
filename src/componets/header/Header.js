import classes from './header.module.css'
import icon from '../../assets/icons/search-icon.png'

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.logo}>Weather meme logo</div>
            <div>
                <input className={classes.textInput} type='text' placeholder='Search city'></input>
                <button type='button' className={classes.search}><img src={icon} alt='Search' /></button>
            </div>
        </div>
    )
};

export default Header;