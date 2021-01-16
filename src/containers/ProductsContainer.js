import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

import { Route } from 'react-router-dom';
import ProductShow from '../components/ProductShow'

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

    render() {

        const allProducts = this.props.products.map( p => {
            return < ProductComponent key={p.id} product={p}/>
        })

        return (
            <div>
                <Route exact path={this.props.match.url} render={() => 
                    <div> { this.props.loading ? "Loading..." : allProducts } </div>}/>
                <Route path={`${this.props.match.url}/:productId`} render={routerProps => 
                    <ProductShow {...routerProps} products={this.props.products} /> }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getAllProducts } )(ProductsContainer);