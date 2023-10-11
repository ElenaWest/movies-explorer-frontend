import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
        <div className='filter-checkbox__container'>
            <input
            type='checkbox'
            className='filter-checkbox__button'
            id='filter-checkbox'
            ></input>
        <label className='filter-checkbox__label' htmlFor='filter-checkbox'>Короткометражки</label>
      </div>        
    );
}

export default FilterCheckbox;