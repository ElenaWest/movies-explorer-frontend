import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import { useCallback, useEffect, useState } from 'react';

function SavedMovies({ savedMovies, onDelete, setIsError }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [searchedMovie, setSearchedMovie] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [firstEntry, setFirstEntry] = useState(true);

    const filter = useCallback((search, isCheck, movies) => {
        setSearchedMovie(search)
        setFilteredMovies(movies.filter((item) => {
        const searchName = item.nameRU.toLowerCase().includes(search.toLowerCase())
        return isCheck ? (searchName && item.duration <= 40) : searchName
    }))
}, [])

function searchMovies(search) {
    setFirstEntry(false)
    filter(search, isCheck, savedMovies)
}

useEffect(() => {
    if (savedMovies.length === 0) {
        setFirstEntry(true)
    } else {
        setFirstEntry(false)
    }
    filter(searchedMovie, isCheck, savedMovies)
}, [filter, savedMovies, isCheck, searchedMovie])

function changeShort() {
    if (isCheck) {
        setIsCheck(false)
        setFirstEntry(false)
        filter(searchedMovie, false, savedMovies)
    } else {
        setIsCheck(true)
        setFirstEntry(false)
        filter(searchedMovie, true, savedMovies)
    }
}
    return(
        <>
        <main className='saved-movies'>
            <SearchForm
              isCheck={isCheck}
              searchMovies={searchMovies}
              searchedMovie={searchedMovie}
              changeShort={changeShort}
              setIsError={setIsError}
              firstEntry={firstEntry}
              savedMovies={savedMovies}
            />
            <MoviesCardList
              movies={filteredMovies}
              onDelete={onDelete}
              firstEntry={firstEntry} 
            />
        </main>
        </>    
    );
}

export default SavedMovies;