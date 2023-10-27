import { NavLink } from "react-router-dom";
import './Navigation.css';
import NavList from "../NavList/NavList.jsx";

function Navigation({ name, loggedIn}) {
    return (
        <nav className="navigation">
        {name === 'homepage' && !loggedIn ?        
            <div className='navigation__container'>
                <NavLink to="/signup" className='navigation__registration'>Регистрация</NavLink>
                <NavLink to="/signin" className='navigation__login'>Войти</NavLink>
            </div>
        :
            <NavList />
        }    
        </nav>
    );
    }

export default Navigation;