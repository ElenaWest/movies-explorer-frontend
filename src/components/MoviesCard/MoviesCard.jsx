import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useEffect, useState } from 'react';

function MoviesCard({ onDelete, addMovie, data, savedMovies }) {
    const location = useLocation();
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies')
        setClick(savedMovies.some(element => data.id === element.movieId))
    }, [savedMovies, data.id, setClick, location])

    function onClick() {
        if (savedMovies.some(element => data.id === element.movieId)) {
            setClick(true)
            addMovie(data)
        } else {
            setClick(false)
            addMovie(data)
        }
    }

    function converTime(duration) {
        const minutes = duration % 60;
        const hours = Math.floor(duration / 60);
        return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
    }
    return(
        <li className='movies-card'>
            <Link to={data.trailerLink} target='blank'>
            <img className='movies-card__picture' 
            src={location.pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} 
            alt={data.name} />
            </Link>
            {location.pathname === '/movies' ? 
              <button type='button' className={`movies-card__button ${click ? 'movies-card__button_like' : ''}`} onClick={onClick}></button>
              :
              <button type='button' className={`movies-card__button movies-card__button_delete`} onClick={() => onDelete(data._id)}></button>
            }
            <div className='movies-card__container'>
                <h2 className='movies-card__title'>{data.nameRU}</h2>
                <p className='movies-card__duration'>{converTime(data.duration)}</p>
            </div>           
        </li>               
    );
}

export default MoviesCard;