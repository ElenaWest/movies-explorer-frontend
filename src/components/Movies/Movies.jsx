import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

function Movies() {
    return(
        <>
        <Header />
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