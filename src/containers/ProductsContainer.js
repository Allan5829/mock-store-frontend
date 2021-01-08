// container to map out each product
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductsContainer extends Component {

    render() {
      return (
        <div>
          products :p
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsContainer);