import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

function SavedMovies() {
    return(
        <>
        <Header />
        <main className='saved-movies'>
            <SearchForm />
            <MoviesCardList />
        </main>
        <Footer />
        </>    
    );
}

export default SavedMovies;