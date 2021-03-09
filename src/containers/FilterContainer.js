import '../cssFolder/FilterContainer.css';
import React, { Component } from 'react';
import FilterCheckboxComponent from '../components/FilterCheckboxComponent'
import { connect } from 'react-redux'
import { sortProducts } from '../actions/productActions'
//import { filter } from 'minimatch';
 
class FilterContainer extends Component {

  state = {
    genderShow: false,
    maincShow: false,
    subcShow: false,
    colorShow: false,
    sizeShow: false,
    sortbyShow: false,
    filters: [],
    sorting: ""
  }

  filterClicked = name => {
    //alert("clicked")
    //console.log(name)

    if (this.state.filters.includes(name)) {
      this.setState(state => {
        const filters = state.filters.filter(x => x !== name)

        return {filters}
      })
    } else if (sortBy.includes(name)) {
      this.setState({
        sorting: name
      })
    } else {
      this.setState(state => {
      const filters = [...state.filters, name];
 
      return {filters}
      });
    }
    
  }

  handleStateSwitch = event => {
    //console.log(event.target.value)
    let button = event.target.id
    let stateSwitch
    this.state[button] === true ? stateSwitch = false : stateSwitch = true
    //console.log(stateSwitch)
    this.setState({
      genderShow: false,
      maincShow: false,
      subcShow: false,
      colorShow: false,
      sizeShow: false,
      sortbyShow: false,
      [button]: stateSwitch
    })
  }

  handleSortProducts = () => {
    if (this.state.sorting.length > 0) {
      this.props.sortProducts(this.state.sorting)
    }
  }
    
  render() {

    let filterTermsGender = [ "men", "women" ]
    let filterTermsMainCategory =  ["top", "bottom", "accessory"]
  
    let filterTermsSubCategory = ["Jacket", "Sweater", "Shirt", "Jeans", "Pants", "Shorts", "Socks", "Hat", "Belt"]
    let filterTermsColor = ["Black", "White", "Neutral", "Gray", "Red", "Blue", "Green", "Yellow", 
      "Multiple"]
    let filterTermsSize = ["Small", "Medium", "Large"]

    let page = this.props.returnPageName()[0];

    return (
      <div className="filter-container">

        <button onClick={this.handleSortProducts}> Sort By </button>
        <button> Filter </button>

        <div className="sort-dropdown">
          <button className="sort-dropdown" id="sortbyShow"  value={this.state.sortbyShow} onClick={this.handleStateSwitch} 
          >Sort Products</button>

          { this.state.sortbyShow ?
            sortBy.map( x => {
              return < FilterCheckboxComponent key={x} name={x} filterList={this.state.sorting} checked={this.filterClicked}/>
          }) : null}
        </div>

        <div className="gender-dropdown">
          { !filterTermsGender.includes(page) ? 
            <button className="gender-dropdown" id="genderShow"  value={this.state.genderShow} onClick={this.handleStateSwitch}
            >Gender</button>  : null}
           
          { this.state.genderShow ?
            filterTermsGender.map( x => {
              return < FilterCheckboxComponent key={x} name={x} filterList={this.state.filters} checked={this.filterClicked}/>
          }) : null}
        </div>

        <div className="mainc-dropdown">
        { !filterTermsMainCategory.includes(page) ? 
            <button className="mainc-dropdown" id="maincShow"  value={this.state.maincShow} onClick={this.handleStateSwitch}
            >Main Category</button>  : null}
          
            { this.state.maincShow ?
            filterTermsMainCategory.map( x => {
              return < FilterCheckboxComponent key={x} name={x} filterList={this.state.filters} checked={this.filterClicked}/>
            }) : null}
        </div>

        <div className="subc-dropdown">
          <button className="subc-dropdown" id="subcShow"  value={this.state.subcShow} onClick={this.handleStateSwitch}>Sub Category</button>

          { this.state.subcShow ?
            filterTermsSubCategory.map( x => {
              return < FilterCheckboxComponent key={x} name={x} filterList={this.state.filters} checked={this.filterClicked}/>
          }) : null}
        </div>

        <div className="color-dropdown">
          <button className="color-dropdown" id="colorShow"  value={this.state.colorShow} onClick={this.handleStateSwitch}>Color</button>

          { this.state.colorShow ?
            filterTermsColor.map( x => {
              return < FilterCheckboxComponent key={x} name={x} filterList={this.state.filters} checked={this.filterClicked}/>
          }) : null}
        </div>

        <div className="size-dropdown">
          <button className="size-dropdown" id="sizeShow"  value={this.state.sizeShow} onClick={this.handleStateSwitch}>Size</button>

          { this.state.sizeShow ?
            filterTermsSize.map( x => {
              return < FilterCheckboxComponent key={x} name={x} filterList={this.state.filters} checked={this.filterClicked}/>
          }) : null}
        </div>
        
      </div>
    );
  }
}

let sortBy = ["Price $-$$$", "Price $$$-$", "Newest", "Oldest"]

export default connect( null, { sortProducts } )(FilterContainer);