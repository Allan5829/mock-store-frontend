// container to map out each product
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../actions/productActions'

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
      return (
        <div>
          { this.props.loading ? "Loading..." : this.props.products }
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getAllProducts } )(ProductsContainer);