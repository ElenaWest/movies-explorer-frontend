import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return(
        // <nav className="navigation">
        //         <div className='navigation__container'>
        //             <NavLink to="/signup" className='navigation__registration'>Регистрация</NavLink>
        //             <NavLink to="/signin" className='navigation__login'>Войти</NavLink>
        //         </div>
        // </nav>
        <>
        <ul className='navigation__movies'>
            <li>
                <NavLink to="/movies" className='navigation__films'>Фильмы</NavLink>                        
            </li>
            <li >
                <NavLink to="/saved-movies" className='navigation__films navigation__saved-films'>Сохранённые фильмы</NavLink>
            </li>
        </ul>
         <NavLink to="/profile" className='navigation__account' type='button'>Аккаунт</NavLink>
         {/* <button className="navigation__movies-burger" type="button"></button>
         <div className="navigation__burger-menu">
            <div className="navigation__burger-menu-open">
                <button className="navigation__burger-close" type="button"></button>
                <ul className="navigation__burger-container">
                    <NavLink to="/" className="navigation__burger-text">Главная</NavLink>
                    <NavLink to="/movies" className='navigation__films navigation__burger-text navigation_isactive'>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className='navigation__films navigation__burger-text'>Сохранённые фильмы</NavLink>
                </ul>
                <NavLink to="/profile" className='navigation__account navigation__account-burger' type='button'>Аккаунт</NavLink>
            </div>
         </div> */}
         </>
    )
}

export default Navigation;