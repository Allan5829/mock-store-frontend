import '../cssFolder/FilterContainer.css';
import React, { Component } from 'react';
import FilterCheckboxComponent from '../components/FilterCheckboxComponent'
import { filter } from 'minimatch';
 
class FilterContainer extends Component {

  filterClicked = () => {
    alert("clicked")
  }
    
  render() {

    let filterTermsGender = [ "Men", "Women" ]
    let filterTermsMainCategory =  ["Top", "Bottom", "Accessory"]
  
    let filterTermsSubCategory = ["Jacket", "Sweater", "Shirt", "Jeans", "Pants", "Shorts", "Socks", "Hat", "Belt"]
    let filterTermsColor = ["Black", "White", "Neutral", "Gray", "Red", "Blue", "Green", "Yellow", 
      "Multiple"]
    let filterTermsSize = ["Small", "Medium", "Large"]
    let sortBy = ["price", "newest (Default)", "oldest"]

    return (
      <div className="filter-container">
        {/* render sort dropdown */}
        {filterTermsColor.map( x => {
          return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
        })}
      </div>
    );
  }
}

export default FilterContainer;