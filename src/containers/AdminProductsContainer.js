import '../cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrentPage, deleteProduct, getAllProducts } from '../actions/productActions'

import AdminProductComponent from '../components/AdminProductComponent'
import PageBar from '../components/PageBar'

class AdminProductsContainer extends Component {

    componentDidMount() {
        if (this.props.location.pathname.includes("delete")) {
            this.props.getAllProducts("all")
        } else {
            let parameters = this.parseUrl()
            this.props.getAllProducts(parameters[0])
            this.editSlice(parameters[1])
        }
    }

    parseUrl = (url = this.props.location) => {
        let path = url.pathname
        let search = url.search
        let result = []
        //works for examples like "/products/men?page=2"
        if (search) {
            result = [path.split('?')[0].split('/')[2], search.split('=')[1] ]
        } else if (path.includes('?')) {
            result = [path.split('?')[0].split('/')[2] , path.split('=')[1] ]
        } else {
            result = [path.split('/')[2], '1']
        }
        return result
    }

    editSlice = page => {
        if (page * 8 === this.props.sliceEnd) {
            // Nothing happens from clicking to view a page the user is already on
        } else if (this.props.location.pathname.includes("delete")) {
            this.props.updateCurrentPage(page)
        } else {
            //console.log(`${this.props.location.pathname}/?page=${page}`);
            this.props.history.push({ pathname: `/products/${this.parseUrl()[0]}?page=${page}`})
            this.props.updateCurrentPage(page)
        }
    }

    deleteProductAction = event => {
        this.props.deleteProduct(event)
    }

    render() {

        const pageCount = ~~(size / 8) + (size % 8 > 0 ? + 1 : + 0)

        const allProducts = this.props.products.slice(this.props.sliceStart, this.props.sliceEnd).map( p => {
            return < AdminProductComponent key={p.id} product={p} deleteProduct={this.deleteProductAction}/>
        })

        return (
            <div className="admin-products-gradient-background">
                <div className="admin-products-background">
                    <div className="admin-products"> 
                        <p> Number - Name - Price - Size - Color - Gender - Main Category - Sub Category - 
                            Delete Button </p>
                        { this.props.loading ? "Loading..." : allProducts }
                    </div>
                    <div className="admin-page-bar"> 
                        < PageBar pages={pageCount} changePage={this.editSlice}/>
                    </div>
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

export default connect(mapStateToProps, { updateCurrentPage, deleteProduct, getAllProducts } )(AdminProductsContainer);