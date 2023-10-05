import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
    return(
        <section className='moviescardlist'>
            <ul className='moviescardlist__list'>
                <MoviesCard />
            </ul>        
        </section>        
    );
}

export default MoviesCardList;