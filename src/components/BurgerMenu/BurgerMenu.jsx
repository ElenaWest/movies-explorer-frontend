import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ active, setActive }) {
    return (
        <div className={active ? "burger-menu" : "burger-menu-hide"}>
             <div className="burger-menu__open">
                 <button className="burger-menu__close" type="button" onClick={() => setActive(false)}></button>
                 <ul className="burger-menu__container">
                    <NavLink to="/" className="burger-menu__text">Главная</NavLink>
                     <NavLink to="/movies" className='burger-menu__text burger-menu__text_isactive'>Фильмы</NavLink>
                     <NavLink to="/saved-movies" className='burger-menu__text'>Сохранённые фильмы</NavLink>
                 </ul>
                 <NavLink to="/profile" className='burger-menu__account'>Аккаунт</NavLink>
             </div>
        </div>     
    )
};

export default BurgerMenu;
