import '../cssFolder/FilterContainer.css';
import React, { Component } from 'react';
import FilterCheckboxComponent from '../components/FilterCheckboxComponent'
import { filter } from 'minimatch';
 
class FilterContainer extends Component {

  state = {
    genderShow: false,
    maincShow: false,
    subcShow: false,
    colorShow: false,
    sizeShow: false,
    sortbyShow: false
  }

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

    let page = this.props.returnPageName();

    return (
      <div className="filter-container">
        {/* render sort dropdown */}

        <div class="sort-dropdown">
          
          <button className="sort-dropdown">Sort By</button>
          <div id="myDropdown" class="dropdown-content">
            { this.state.sortbyShow ?
            sortBy.map( x => {
              return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
            }) : null}
          </div>
        </div>

        <div class="gender-dropdown">
          
          { !filterTermsGender.includes(page) ? 
            <button className="gender-dropdown">Gender</button>  : null}
           
          <div id="myDropdown" class="dropdown-content">
            { this.state.genderShow ?
            filterTermsGender.map( x => {
              return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
            }) : null}
          </div>
        </div>

        <div class="mainc-dropdown">
        { !filterTermsMainCategory.includes(page) ? 
            <button className="mainc-dropdown">Main Category</button>  : null}
          
          <div id="myDropdown" class="dropdown-content">
            { this.state.maincShow ?
            filterTermsMainCategory.map( x => {
              return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
            }) : null}
          </div>
        </div>

        <div className="subc-dropdown">
          <button className="subc-dropdown">Sub Category</button>
          <div id="myDropdown" className="dropdown-content">
            { this.state.subcShow ?
            filterTermsSubCategory.map( x => {
              return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
            }) : null}
          </div>
        </div>

        <div className="color-dropdown">
          <button className="color-dropdown">Color</button>
          <div id="myDropdown" className="dropdown-content">
            { this.state.colorShow ?
            filterTermsColor.map( x => {
              return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
            }) : null}
          </div>
        </div>

        <div className="size-dropdown">
          <button className="size-dropdown">Size</button>
          <div id="myDropdown" className="dropdown-content">
            { this.state.sizeShow ?
            filterTermsSize.map( x => {
              return < FilterCheckboxComponent key={x} name={x} checked={this.filterClicked}/>
            }) : null}
          </div>
        </div>
        
      </div>
    );
  }
}

export default FilterContainer;