import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
        <div className='filtercheckbox__container'>
            <button
            type='checkbox'
            className='filtercheckbox__button'
            ></button>
        <label className='filtercheckbox__label'>Короткометражки</label>
      </div>        
    );
}

export default FilterCheckbox;