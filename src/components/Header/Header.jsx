import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
    return(
        <header className='header'>
            <Logo />           
            <Navigation loggedIn={loggedIn}/>                       
        </header>
    );
}

export default Header;