import Navigation from '../Navigation/Navigation';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header className='header'>
            <NavLink to="/" className="header__logo" />            
            <Navigation />                       
        </header>
    );
}

export default Header;