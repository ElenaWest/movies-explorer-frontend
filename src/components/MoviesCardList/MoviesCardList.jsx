import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import printCards from '../../utils/printCards.js';
import { MEDIUM_SCREEN, MESSAGE_ERROR_MOVIES, MESSAGE_ERROR_MOVIES_LIST, MESSAGE_ERROR_MOVIES_SAVED, MESSAGE_ERROR_NOT_FOUND, SMALL_SCREEN, STEP_MAX_SCREEN } from '../../utils/constants';
import Preloader from '../Preloader/Preloader.jsx';

function MoviesCardList({ movies, onDelete, addMovie, savedMovies, isLoading, serverError, firstEntry }) {
    const location = useLocation();
    const [count, setCount] = useState('');
    const fact = movies.slice(0, count);    

    useEffect(() => {
        if (location.pathname === '/movies') {
            setCount(printCards().init)
            function printCardsForResize() {
                if (window.innerWidth >= STEP_MAX_SCREEN) {
                    setCount(printCards().init)
                }
                if (window.innerWidth < STEP_MAX_SCREEN) {
                    setCount(printCards().init)
                }
                if (window.innerWidth < MEDIUM_SCREEN) {
                    setCount(printCards().init)
                }
                if (window.innerWidth < SMALL_SCREEN) {
                    setCount(printCards().init)
                }
            }
            window.addEventListener('resize', printCardsForResize)
            return() => window.removeEventListener('resize', printCardsForResize)
        }
    }, [location])

    function clickMoreButton() {
        setCount(count + printCards().step)
    }

    return(
        <section className='movies-card-list'>
            <ul className='movies-card-list__list'>
                {isLoading ? <Preloader /> : (location.pathname === '/movies' && fact.length !== 0) ?
                  fact.map(data => {
                    return(
                        <MoviesCard
                          key={data.id}
                          savedMovies={savedMovies}
                          addMovie={addMovie}
                          data={data}
                        />
                    )
                  }) : movies.length !== 0 ?
                    movies.map(data => {
                    return(
                        <MoviesCard
                          key={data._id}
                          onDelete={onDelete}
                          data={data}
                        />
                    )
                    }) : serverError ?
                      <span className='movies-card-list__span'>{MESSAGE_ERROR_MOVIES}</span>
                      : !firstEntry ?
                      <span className='movies-card-list__span'>{MESSAGE_ERROR_NOT_FOUND}</span>
                      : location.pathname === '/movies' ?
                      <span className='movies-card-list__span'>{MESSAGE_ERROR_MOVIES_LIST}</span>
                      :
                      <span className='movies-card-list__span'>{MESSAGE_ERROR_MOVIES_SAVED}</span>
                }                
            </ul>
            {location.pathname === '/movies' && <button className={`movies-card-list__button ${count >= movies.length && 'movies-card-list__button_hidden'}`} type='button' onClick={clickMoreButton}>Ещё</button>}       
        </section>        
    );
}

export default MoviesCardList;