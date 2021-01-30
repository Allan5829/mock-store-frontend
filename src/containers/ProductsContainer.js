import '../cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, updateCurrentPage } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

import { Route } from 'react-router-dom';
import ProductShow from '../components/ProductShow'
import PageBar from '../components/PageBar'

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts(this.props.filterTerm)
        showPageBar = true
    }

    shouldComponentUpdate(nextProps) {
        // Triggers when user is (for example) viewing Men's products and clicks to view Women's products
        if (this.props.filterTerm !== nextProps.filterTerm) {
            this.props.getAllProducts(nextProps.filterTerm)
        }

        // Hides PageBar component so it doesn't appear in the ProductShow component
        if (this.props.location.pathname !== nextProps.location.pathname) {
            nextProps.location.pathname === "/products" ? showPageBar = true : showPageBar = false
        }

        return true
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
            <div className="products-page">
                <div className="filter-container">
                </div>
                <div className="all-product"> 
                    <Route exact path={this.props.match.url} render={() => 
                        <div> { this.props.loading ? "Loading..." : allProducts } </div>}/>
                    <Route path={`${this.props.match.url}/:productId`} render={routerProps => 
                        <ProductShow {...routerProps} /> }/>
                </div> 
                <div className="page-bar"> 
                    { showPageBar ? < PageBar pages={pageCount} changePage={this.editSlice}/> : null }
                </div>
            </div>
        )
    }
} 

// showPagebar used to determine whether or not PageBar appears
// Uses variable instead of local state because state would have to be updated in shouldComponentUpdate
// Would be more work to keep track in Store's state
let showPageBar 

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