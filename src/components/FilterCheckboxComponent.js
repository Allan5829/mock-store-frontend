import React from 'react';

const FilterCheckboxComponent = props => {
    let isChecked = props.filterList.includes(props.name)
    //console.log(isChecked)
    return (
        <div className='filter-checkbox'> 
            <label>{props.name}:</label>
            <input type="checkbox" checked={isChecked} id={props.name} onClick={() => props.checked(props.name)}/>
        </div> 
    )
}  

export default FilterCheckboxComponent