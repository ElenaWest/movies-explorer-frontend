import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import apiMovies from '../../utils/MoviesApi.js';

function Movies({ setIsError, addMovie, savedMovies }) {
    const [allMovies, setAllMovies] = useState([])
    const [selectedMovies, setSelectedMovies] = useState([])
    const [searchedMovie, setSearchedMovie] = useState('')
    const [isCheck, setIsCheck] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [firstEntry, setFirstEntry] = useState(true)

    const filter = useCallback((search, isCheck, movies) => {
        localStorage.setItem('movie', JSON.stringify(search))
        localStorage.setItem('shorts', JSON.stringify(isCheck))
        localStorage.setItem('allMovies', JSON.stringify(movies))
        setSearchedMovie(search)
        setSelectedMovies(movies.filter((item) => {
            const searchName = item.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && item.duration <= 40) : searchName
        }))
    }, [])

    function searchMovies(search) {
        if (allMovies.length === 0) {
            setIsLoading(true)
            apiMovies.getMovies()
              .then((res) => {
                setAllMovies(res)
                setIsCheck(false)
                setServerError(false)
                setFirstEntry(false)
                filter(search, isCheck, res)
              })
              .catch(error => {
                setServerError(true)
                console.error(`Ошибка при поиске фильмов ${error}`)
              })
              .finally(() => setIsLoading(false))
          } else {
            filter(search, isCheck, allMovies)
          }
        }

    useEffect(() => {
        if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
            const movies = JSON.parse(localStorage.allmovies)
            const search = JSON.parse(localStorage.movie)
            const isCheck = JSON.parse(localStorage.shorts)
            setServerError(false)
            setFirstEntry(false)
            setSearchedMovie(search)
            setIsCheck(isCheck)
            setAllMovies(movies)
            filter(search, isCheck, movies)
        }
    }, [filter])

    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            filter(searchedMovie, false, allMovies)
        } else {
            setIsCheck(true)
            filter(searchedMovie, true, allMovies)
        }
    }
    
    return(
        <section className='movies'>
          <SearchForm
            isCheck={isCheck}
            searchMovies={searchMovies}
            searchedMovie={searchedMovie}
            changeShort={changeShort}
            setIsError={setIsError}
            firstEntry={firstEntry}
          />
          <MoviesCardList
            movies={selectedMovies}
            addMovie={addMovie}
            savedMovies={savedMovies}
            isLoading={isLoading}
            serverError={serverError}
            firstEntry={firstEntry}
          />
        </section>
    )
}

export default Movies;