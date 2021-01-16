import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, updateNavFilter } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

import { Route } from 'react-router-dom';
import ProductShow from '../components/ProductShow'

import Test from '../components/test'


class ProductsContainer extends Component {

    state = {
        currentProductId: 0
    }

    componentDidMount() {
        this.props.getAllProducts(this.props.filterTerm)
    }

    loaded() {
        if (this.props.filterT !== this.props.filterTerm) {
                //what this is meant to do is update state inside store in the situation that a user has
                //clicked on "Men" and then clicks on "Women" but the page doesn't update

                //console.log(this.props.filterT, this.props.filterTerm)
                //console.log(Test(this.props.filterTerm))

                //this.forceUpdate()
                //infinite loop because I can't update state ;-;

                //this.props.updateNavFilter(this.props.filterTerm)
                //Warning: Cannot update a component (`Connect(ProductsContainer)`) while 
                //rendering a different component (`ProductsContainer`)
                
            }
    }

    render() {

        const allProducts = this.props.products.map( p => {
            return < ProductComponent key={p.id} product={p}/>
        })

        return (
            <div>
                {this.props.loading ? null : this.loaded()}
                <Route exact path={this.props.match.url} render={() => 
                    <div> { this.props.loading ? "Loading..." : allProducts } </div>}/>
                <Route path={`${this.props.match.url}/:productId`} render={routerProps => 
                    <ProductShow {...routerProps} products={this.props.products} /> }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        products: state.productReducer.products,
        loading: state.loading,
        filterT: state.productReducer.filterTerm
    }
}

export default connect(mapStateToProps, { getAllProducts, updateNavFilter } )(ProductsContainer);