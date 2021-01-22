import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, updateCurrentPage } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

import { Route } from 'react-router-dom';
import ProductShow from '../components/ProductShow'
import PageBar from '../components/PageBar'
//import '../cssFolder/ProductContainer.css';

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts(this.props.filterTerm)
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.filterTerm !== nextProps.filterTerm) {
            this.props.getAllProducts(nextProps.filterTerm)
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
            <div>
                <div className="filter-container">
                </div>
                <div className="all-product"> 
                     <Route exact path={this.props.match.url} render={() => 
                        <div> { this.props.loading ? "Loading..." : allProducts } </div>}/>
                    <Route path={`${this.props.match.url}/:productId`} render={routerProps => 
                        <ProductShow {...routerProps} products={this.props.products} /> }/>
                </div> 
                <div className="page-bar"> 
                    < PageBar pages={pageCount} changePage={this.editSlice}/> 
                </div>
            </div>
        )
    }
} 

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