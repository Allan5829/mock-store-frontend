import React from 'react';

const FilterCheckboxComponent = props => {
    return (
        <div className='filter-checkbox'> 
            <label>{props.name}:</label>
            <input type="checkbox" id={props.name} onClick={() => props.checked()}/>
        </div> 
    )
}  

export default FilterCheckboxComponent