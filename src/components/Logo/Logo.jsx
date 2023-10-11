import { NavLink } from 'react-router-dom';
import './Logo.css';

function Logo() {
    return(
        <div className='logo'>
        <NavLink to="/" className="logo__link" />
        </div>
    );
}

export default Logo;