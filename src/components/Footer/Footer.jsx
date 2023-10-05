import './Footer.css';

function Footer() {
    return(
    <footer className="footer">
        <p className="footer__text footer__text_up">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__down">
            <p className="footer__text footer__text_year">&#169; 2023</p>
            <div className="footer__container">
                <a className="footer__text footer__text_decoration" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
                <a className="footer__text footer__text_decoration" href="https://github.com" target="blank">Github</a>
            </div>            
        </div>

    </footer>
    );
}

export default Footer;