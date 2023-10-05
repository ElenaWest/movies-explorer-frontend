import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return(
        <section className='searchform'>
            <form className='searchform__container'>
                <input className='searchform__input' placeholder='Фильм'></input>
                <button className='searchform__button' type='submit'></button>
            </form>
            <FilterCheckbox />
        </section>
        
    );
}

export default SearchForm;