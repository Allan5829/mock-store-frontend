import '../cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, updateCurrentPage } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

import { Route } from 'react-router-dom';
//import ProductShow from '../components/ProductShow'
import PageBar from '../components/PageBar'

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts(this.returnFilterTerm())
        showProductsPage = true
    }

    shouldComponentUpdate(nextProps) {
        // The following code was used to resolve a bug that occurs when including a Route with 
        //  path="/products", changing path to anything else besides "/products/:id" resolves issue.

        // Hides components that shouldn't be visible due to a bug that causes this component to be 
        //  rendered when it shouldn't.

        if (this.props.products.length !== nextProps.products.length) {
            // Will be commented out to save code for potential future use as well as showProductPage
            //nextProps.match.path === "/products" ? showProductsPage = false : showProductsPage = true
        }

        return true
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
                { showProductsPage ? 
                <div className="products-page">
                    <div className="filter-container">
                    </div>
                    <div className="all-product"> 
                        { this.props.loading ? "Loading..." : allProducts }
                    </div> 
                    <div className="page-bar"> 
                        < PageBar pages={pageCount} changePage={this.editSlice}/> 
                    </div>
                </div>
                : null }
            </div>
        )
    }
} 

// showProductsPage used to determine whether or not PageBar appears
// Uses variable instead of local state because state would have to be updated in shouldComponentUpdate
// Would be more work to keep track in Store's state
let showProductsPage 

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