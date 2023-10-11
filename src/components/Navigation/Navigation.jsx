import { NavLink, useLocation } from "react-router-dom";
import './Navigation.css';
// import { useState } from "react";

// НЕ ПОНЯЛА ВАШЕ ЗАМЕЧАНИЕ (ЭТО И ТАК РЕАЛИЗОВАНО МОДИФИКАТОРАМИ НА ДАННОМ ЭТАПЕ):
// Обратите внимание, что у активной вкладки на странице с фильмами/сохраненными фильмами дизайн 
// немного отличается, она имеет отличную толщину шрифта. В мобильном меню активная вкладка всегда 
// подчеркнута. Это можно сделать с помощью простых БЭМ модификаторов.
// PS: Не крик, выделила, что б заметнее было :)

//С бургером не успеваю реализовать задумку, запуталась. Сделала временную условную реализацию, 
// на следующем этапе доделаю, надеюсь текущих правок достаточно, чтобы получить зачет,
// стилизация бургерменю и навигации в css готова, пока закомитила
//  АМИНЬ :D

function Navigation() {
    const location = useLocation();
    // const [count, setCount] = useState(0);

    // function handleClick() {
    //     count === 0 ? setCount(1) : setCount(0)
    // }

    // useEffect(() => {
    //     const clientWidth = document.documentElement.clientWidth > '767';
    //     function closeBurgerForResize() {
    //         if (clientWidth) {
    //             setCount(0)
    //             window.removeEventListener('resize', closeBurgerForResize)
    //         }
    //     }
    //         if (count === 1) {
    //             window.addEventListener('resize', closeBurgerForResize)
    //             return() => window.removeEventListener('resize', closeBurgerForResize)
    //         }
    // }, [count])

    return (
        <nav className="navigation">
        {location.pathname === "/" &&        
            <div className='navigation__container'>
                <NavLink to="/signup" className='navigation__registration'>Регистрация</NavLink>
                <NavLink to="/signin" className='navigation__login'>Войти</NavLink>
            </div>}
        {location.pathname === "/movies" &&
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
            <NavLink to="/profile" className='navigation__account' type='button'>Аккаунт</NavLink>
            </div>
        }
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
         </div>  */}
     </nav>
  );
}

export default Navigation;