import '../cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, updateCurrentPage } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'
import PageBar from '../components/PageBar'
import FilterContainer from './FilterContainer'

// edit css https://www.w3schools.com/css/tryit.asp?filename=trycss_template2_grid
class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts(this.returnFilterTerm())
    }

    returnFilterTerm = () => {
        switch(this.props.location.pathname) {
            case("/products_men"):
              return "Men"
            case("/products_women"):
              return "Women"
            case("/products_top"):
              return "Top"
            case("/products_bottom"):
              return "Bottom"
            case("/products_accessory"):
              return "Accessory"
            default:
              return "None"
          }
    }

    editSlice = page => {
        if (page * 8 === this.props.sliceEnd) {
            // Nothing happens from clicking to view a page the user is already on
        } else {
            this.props.updateCurrentPage(page)
        }
    }

    render() {

        const pageCount = ~~(size / 8) + (size % 8 > 0 ? + 1 : + 0)

        const allProducts = this.props.products.slice(this.props.sliceStart, this.props.sliceEnd).map( p => {
            return < ProductComponent key={p.id} product={p}/>
        })

        return (
            <div className="products-container">
                <div className="products-page">
                    <div className="filter-container">
                        <FilterContainer returnPageName={this.returnFilterTerm}/>
                    </div>
                    <div className="all-product"> 
                        { this.props.loading ? "Loading..." : allProducts }
                    </div> 
                    <div className="page-bar"> 
                        < PageBar pages={pageCount} changePage={this.editSlice}/> 
                    </div>
                </div>
            </div>
        )
    }
} 

// size used to determine how many buttons PageBar contains and for quicker access to data
let size

const mapStateToProps = state => {
    let s = state.productReducer
    size = s.products.length

    return {
        products: s.products,
        loading: s.loading,
        sliceStart: s.sliceStart,
        sliceEnd: s.sliceEnd
    }
}

export default connect(mapStateToProps, { getAllProducts, updateCurrentPage } )(ProductsContainer);