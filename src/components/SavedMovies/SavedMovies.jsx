import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';

function SavedMovies() {
    return(
        <>
        <main className='savedmovies'>
            <SearchForm />
            <MoviesCardList />
        </main>
        <Footer />
        </>    
    );
}

export default SavedMovies;