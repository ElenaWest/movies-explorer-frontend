import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import useFormValidation from '../../hooks/useFormValidation.js';
import ErrorContext from '../../context/ErrorContext.js';

function SearchForm({ isCheck, searchedMovie, searchMovies, setIsError, firstEntry, savedMovies, movies, filter, setIsCheck }) {
    const location = useLocation();
    const isError = useContext(ErrorContext);
    const { values, handleChange, reset } = useFormValidation();

    useEffect(() => {
        if ((location.pathname === '/saved-movies' && savedMovies.length === 0)) {
            reset({ search: ''})
        } else {
            reset({ search: searchedMovie })
        }
        setIsError(false)
    }, [searchedMovie, reset, setIsError, location, savedMovies])

    function onSubmit(e) {
        e.preventDefault()
        if (e.target.search.value) {
            searchMovies(e.target.search.value)
            setIsError(false)
        } else {
            setIsError(true)
        }
    }

    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            filter(values.search, false, movies)
        } else {
            setIsCheck(true)
            filter(values.search, true, movies)
        }
    }

    return(
        <section className='search-form'>
            <form noValidate className='search-form__container' name={'SearchForm'} onSubmit={onSubmit}>
                <input 
                className='search-form__input' 
                placeholder='Фильм'
                type='text'
                name='search'
                value={values.search || ''}
                onChange={(e) => {
                  handleChange(e)
                  setIsError(false)
                }}
                disabled={savedMovies ? (savedMovies.length === 0 && true) : false}
                required
                ></input>
                <button className='search-form__button' type='submit'></button>
            </form>
            <span className={`search-form__span ${isError && 'search-form__span_active'}`}>Введите ключевое слово</span>
            <FilterCheckbox isCheck={isCheck} changeShort={changeShort} firstEntry={firstEntry} />
        </section>        
    );
}

export default SearchForm;