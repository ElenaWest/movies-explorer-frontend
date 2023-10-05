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
        <li className='moviescard'>
            <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
            <img className='moviescard__picture' src={FilmOne} alt='Кадр из фильма'/>
            </a>
            <button className='moviescard__button-save' type='button'>Сохранить</button>
            {/* <button className='moviescard__saved-button' type='button'></button> */}
            {/* <button className='moviescard__delete-button' type='button'></button> */}
            <div className='moviescard__container'>
                <h4 className='moviescard__title'>33 слова о дизайне</h4>
                <p className='moviescard__duration'>1ч 17м</p>
            </div>           
        </li>
        <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmTwo} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save' type='button'>Сохранить</button> */}
        <button className='moviescard__saved-button' type='button'></button>
        {/* <button className='moviescard__delete-button' type='button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Киноальманах «100 лет дизайна»</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmThree} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save' type='button'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button' type='button'></button> */}
        <button className='moviescard__delete-button' type='button'></button>
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>В погоне за Бенкси</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmFour} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Баския: Взрыв реальности</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmFive} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Бег это свобода</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmSix} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Книготорговцы</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmSeven} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Когда я думаю о Германии ночью</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmEight} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Gimme Danger: История Игги и The Stooges</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmNine} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Дженис: Маленькая девочка грустит</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmTen} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Соберись перед прыжком</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmEleven} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>Пи Джей Харви: A dog called money</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    <li className='moviescard'>
        <a href='https://www.youtube.com/shorts/DpCWfLO2mtQ' target='blank'>
        <img className='moviescard__picture' src={FilmTwelve} alt='Кадр из фильма'/>
        </a>
        {/* <button className='moviescard__button-save'>Сохранить</button> */}
        {/* <button className='moviescard__saved-button'></button> */}
        <div className='moviescard__container'>
            <h4 className='moviescard__title'>По волнам: Искусство звука в кино</h4>
            <p className='moviescard__duration'>1ч 17м</p>
        </div>           
    </li>
    </>        
    );
}

export default MoviesCard;