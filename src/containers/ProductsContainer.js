// container to map out each product
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {

        const allProducts = this.props.products.map( p => {
            return < ProductComponent key={p.id} product={p}/>
        })

        return (
            <div>
            { this.props.loading ? "Loading..." : allProducts }
            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getAllProducts } )(ProductsContainer);