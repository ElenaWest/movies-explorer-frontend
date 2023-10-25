import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn, name }) {
    return(
        <header className='header'>
            <Logo />           
            <Navigation loggedIn={loggedIn} name={name} />                       
        </header>
    );
}

export default Header;