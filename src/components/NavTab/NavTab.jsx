import './NavTab.css';

function NavTab() {
    return(
        <nav className="navtab">
            <ul className="navtab__list">
                <li className="navtab__link">
                    <a href='#aboutproject' className="navtab__button">О проекте</a>
                </li>
                <li className="navtab__link">
                    <a href='#techs' className="navtab__button">Технологии</a>
                </li>
                <li className="navtab__link">
                    <a href='#aboutme' className="navtab__button">Студент</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;