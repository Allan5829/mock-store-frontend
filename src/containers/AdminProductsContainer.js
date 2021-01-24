import '../cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, updateCurrentPage } from '../actions/productActions'

import AdminProductComponent from '../components/AdminProductComponent'
import PageBar from '../components/PageBar'

class AdminProductsContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts("no filter term")
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
            return < AdminProductComponent key={p.id} product={p}/>
        })

        return (
            <div>
                { this.props.loading ? "Loading..." : allProducts }
                <div className="admin-page-bar"> 
                    < PageBar pages={pageCount} changePage={this.editSlice}/>
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

export default connect(mapStateToProps, { getAllProducts, updateCurrentPage } )(AdminProductsContainer);