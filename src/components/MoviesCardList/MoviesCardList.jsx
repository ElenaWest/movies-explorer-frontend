import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
    return(
        <section className='movies-card-list'>
            <ul className='movies-card-list__list'>
                <MoviesCard />
            </ul>        
        </section>        
    );
}

export default MoviesCardList;