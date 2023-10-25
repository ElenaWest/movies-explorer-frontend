import { NavLink, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ active, setActive }) {
    const location = useLocation();

    return (
        <div className={active ? "navigation__burger-menu" : "navigation__burger-menu-hide"}>
             <div className="navigation__burger-menu-open">
                 <button className="navigation__burger-menu-close" type="button" onClick={() => setActive(false)}></button>
                 <ul className="navigation__burger-menu-container">
                    <NavLink to="/" className={`navigation__burger-menu-text ${location.pathname === '/' ? 'navigation__burger-menu-text_active' : ''}`}>Главная</NavLink>
                     <NavLink to="/movies" className={`navigation__burger-menu-text ${location.pathname === '/movies' ? 'navigation__burger-menu-text_active' : ''}`}>Фильмы</NavLink>
                     <NavLink to="/saved-movies" className={`navigation__burger-menu-text ${location.pathname === '/saved-movies' ? 'navigation__burger-menu-text_active' : ''}`}>Сохранённые фильмы</NavLink>
                 </ul>
                 <NavLink to="/profile" className='navigation__burger-menu-account'>Аккаунт</NavLink>
             </div>
        </div>     
    )
};

export default BurgerMenu;
