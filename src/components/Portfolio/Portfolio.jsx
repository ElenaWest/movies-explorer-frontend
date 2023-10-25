import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>
                    <a className='portfolio__text' href='https://github.com/ElenaWest/how-to-learn' target='blank'>Статичный сайт</a>
                </li>
                <li className='portfolio__link'>
                    <a className='portfolio__text' href='https://github.com/ElenaWest/russian-travel' target='blank'>Адаптивный сайт</a>
                </li>
                <li className='portfolio__link'>
                    <a className='portfolio__text' href='https://github.com/ElenaWest/react-mesto-api-full-gha' target='blank'>Одностраничное приложение</a>                    
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;