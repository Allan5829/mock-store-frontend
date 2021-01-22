import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

import { Route } from 'react-router-dom';
import ProductShow from '../components/ProductShow'
import PageBar from '../components/PageBar'

class ProductsContainer extends Component {

    state = {
        sliceStart: 0,
        sliceEnd: 8
    }

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
        //set state

        //console.log( ~~(41 / 8), 41%8 )
    }

    render() {

        const pageCount = ~~(size / 8) + (size % 8 > 0 ? + 1 : + 0)

        const allProducts = this.props.products.slice(this.state.sliceStart, this.state.sliceEnd).map( p => {
            return < ProductComponent key={p.id} product={p}/>
        })

        return (
            <div>
                <Route exact path={this.props.match.url} render={() => 
                    <div> { this.props.loading ? "Loading..." : allProducts } </div>}/>
                <Route path={`${this.props.match.url}/:productId`} render={routerProps => 
                    <ProductShow {...routerProps} products={this.props.products} /> }/>
                { this.props.loading ? "Loading..." : console.log(pageCount) }
                { this.props.loading ? null : < PageBar pages={pageCount} changePage={this.editSlice}/> }
            </div>
        )
    }
} 

let size

const mapStateToProps = state => {
    size = state.productReducer.products.length
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getAllProducts } )(ProductsContainer);