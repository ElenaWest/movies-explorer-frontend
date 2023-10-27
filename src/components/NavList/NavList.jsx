import { NavLink, useLocation } from 'react-router-dom';
import './NavList.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import { useState } from 'react';

function NavList() {
    const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);
    const location = useLocation();

    return(
        <>
            <div className="navigation__navlist">
            <ul className="navigation__navlist-container">
                <li>
                    <NavLink to="/movies" className={`navigation__navlist-films ${location.pathname === '/movies' ? 'navigation__navlist-films_active' : ''}`}>Фильмы</NavLink>                        
                </li>
                <li >
                    <NavLink to="/saved-movies" className={`navigation__navlist-films ${location.pathname === '/saved-movies' ? 'navigation__navlist-films_active' : ''}`}>Сохранённые фильмы</NavLink>
                </li>
            </ul>
            <NavLink to="/profile" className='navigation__navlist-account'>Аккаунт</NavLink>
            </div>
            <button className="navigation__navlist-movies-burger" type="button" onClick={() => setBurgerMenuIsActive(!burgerMenuIsActive)}></button>
            <BurgerMenu active={burgerMenuIsActive} setActive={setBurgerMenuIsActive} />
        </>
    );
}

export default NavList;