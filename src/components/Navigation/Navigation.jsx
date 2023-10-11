import { NavLink, useLocation } from "react-router-dom";
import './Navigation.css';
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation() {
    const location = useLocation();
    const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

    return (
        <nav className="navigation">
        {location.pathname === "/" &&        
            <div className='navigation__container'>
                <NavLink to="/signup" className='navigation__registration'>Регистрация</NavLink>
                <NavLink to="/signin" className='navigation__login'>Войти</NavLink>
            </div>}
        {location.pathname === "/movies" &&
        <>
            <div className="navigation__movies-container">
            <ul className="navigation__movies-list">
                <li>
                    <NavLink to="/movies" className='navigation__films'>Фильмы</NavLink>                        
                </li>
                <li >
                    <NavLink to="/saved-movies" className='navigation__films navigation__saved-films'>Сохранённые фильмы</NavLink>
                </li>
            </ul>
            <NavLink to="/profile" className='navigation__account'>Аккаунт</NavLink>
            </div>
            <button className="navigation__movies-burger" type="button" onClick={() => setBurgerMenuIsActive(!burgerMenuIsActive)}></button>
            <BurgerMenu active={burgerMenuIsActive} setActive={setBurgerMenuIsActive} />
            </>
        }
        {location.pathname === "/saved-movies" &&
            <div className="navigation__movies-container">
            <nav className='navigation__movies'>
                <ul className="navigation__movies-list">
                    <li>
                        <NavLink to="/movies" className='navigation__films'>Фильмы</NavLink>                        
                    </li>
                    <li >
                        <NavLink to="/saved-movies" className='navigation__films navigation__saved-films'>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink to="/profile" className='navigation__account'>Аккаунт</NavLink>
            </div>
        }
        {location.pathname === "/profile" &&
            <div className="navigation__movies-container">
            <nav className='navigation__movies'>
                <ul className="navigation__movies-list">
                    <li>
                        <NavLink to="/movies" className='navigation__films'>Фильмы</NavLink>                        
                    </li>
                    <li >
                        <NavLink to="/saved-movies" className='navigation__films navigation__saved-films'>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink to="/profile" className='navigation__account'>Аккаунт</NavLink>
            </div>
        }
     </nav>
  );
}

export default Navigation;