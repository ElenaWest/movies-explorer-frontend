import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer.jsx';

function Movies() {
    return(
        <>
        <main className='movies'>
            <SearchForm />
            <MoviesCardList />
            <button className='movies__button' type='button'>Ещё</button>
        </main>
        <Footer />
        </>       
    );
}

export default Movies;