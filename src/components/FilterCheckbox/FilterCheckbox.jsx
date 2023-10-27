import './FilterCheckbox.css';

function FilterCheckbox({ isCheck, changeShort, firstEntry }) {
    return(
        <div className='filter-checkbox'>
            <input
            type='checkbox'
            className='filter-checkbox__button'
            onChange={() => changeShort()}
            disabled={firstEntry}
            id='filter-checkbox'
            />
        <label className='filter-checkbox__label' htmlFor='filter-checkbox'>Короткометражки</label>
      </div>        
    );
}

export default FilterCheckbox;