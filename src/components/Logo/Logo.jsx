import { NavLink } from 'react-router-dom';
import './Logo.css';

function Logo() {
    return(
        <>
        <NavLink to="/" className="logo" />
        </>
    );
}

export default Logo;