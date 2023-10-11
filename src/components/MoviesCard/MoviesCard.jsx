import './MoviesCard.css';
import FilmOne from '../../images/Films/one.png';
import FilmTwo from '../../images/Films/two.png';
import FilmThree from '../../images/Films/three.png';
import FilmFour from '../../images/Films/four.png';
import FilmFive from '../../images/Films/five.png';
import FilmSix from '../../images/Films/six.png';
import FilmSeven from '../../images/Films/seven.png';
import FilmEight from '../../images/Films/eight.png';
import FilmNine from '../../images/Films/nine.png';
import FilmTen from '../../images/Films/ten.png';
import FilmEleven from '../../images/Films/eleven.png';
import FilmTwelve from '../../images/Films/twelve.png';

// Возможно правильнее было делать через массивы, но мне такая реализация была сподручнее, 
// на этапе верстки переделывать не стала (в следующей части все равно перепишу)

function MoviesCard() {
    return(
        <>
        <li className='movies-card'>
            <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
            <img className='movies-card__picture' src={FilmOne} alt='Кадр из фильма'/>
            </a>
            <button className='movies-card__button movies-card__button_save' type='button'>Сохранить</button>
            {/* <button className='movies-card__button movies-card__button_like' type='button'></button> */}
            {/* <button className='movies-card__button movies-card__button_delete' type='button'></button> */}
            <div className='movies-card__container'>
                <h2 className='movies-card__title'>33 слова о дизайне</h2>
                <p className='movies-card__duration'>1ч 17м</p>
            </div>           
        </li>
        <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmTwo} alt='Кадр из фильма'/>
        </a>
        {/* <button className='movies-card__button movies-card__button_save' type='button'>Сохранить</button> */}
        <button className='movies-card__button movies-card__button_like' type='button'></button>
        {/* <button className='movies-card__button movies-card__button_delete' type='button'></button> */}
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Киноальманах «100 лет дизайна»</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmThree} alt='Кадр из фильма'/>
        </a>
        {/* <button className='movies-card__button movies-card__button_save' type='button'>Сохранить</button> */}
        {/* <button className='movies-card__button movies-card__button_like' type='button'></button> */}
        <button className='movies-card__button movies-card__button_delete' type='button'></button>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>В погоне за Бенкси</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmFour} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Баския: Взрыв реальности</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmFive} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Бег это свобода</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmSix} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Книготорговцы</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmSeven} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Когда я думаю о Германии ночью</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmEight} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Gimme Danger: История Игги и The Stooges</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmNine} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Дженис: Маленькая девочка грустит</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmTen} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Соберись перед прыжком</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmEleven} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>Пи Джей Харви: A dog called money</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='movies-card'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='movies-card__picture' src={FilmTwelve} alt='Кадр из фильма'/>
        </a>
        <div className='movies-card__container'>
            <h2 className='movies-card__title'>По волнам: Искусство звука в кино</h2>
            <p className='movies-card__duration'>1ч 17м</p>
        </div>           
    </li>
    </>        
    );
}

export default MoviesCard;