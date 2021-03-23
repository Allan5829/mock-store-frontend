import '../cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts,  updateCurrentPage } from '../actions/productActions'
import ProductComponent from '../components/ProductComponent'
import PageBar from '../components/PageBar'
import FilterContainer from './FilterContainer'

// edit css https://www.w3schools.com/css/tryit.asp?filename=trycss_template2_grid
class ProductsContainer extends Component {

    componentDidMount() {
        let parameters = this.parseUrl()
        this.props.getAllProducts(parameters[0])
        this.editSlice(parameters[1])
    }

    shouldComponentUpdate(nextProps) {
        let next = this.parseUrl(nextProps.location)
        let parameters = this.parseUrl()
        if ( next[0] !== parameters[0] ) {
            this.props.getAllProducts(next[0])
        }
        return true
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
        } else {
            //console.log(`${this.props.location.pathname}/?page=${page}`);
            this.props.history.push({ pathname: `/products/${this.parseUrl()[0]}?page=${page}`})
            this.props.updateCurrentPage(page)
        }
    }

    render() {

        const pageCount = ~~(size / 8) + (size % 8 > 0 ? + 1 : + 0)

        const allProducts = this.props.products.slice(this.props.sliceStart, this.props.sliceEnd).map( p => {
            return < ProductComponent key={p.id} product={p}/>
        })

        return (
            <div className="products-container">
                <div className="products-page">
                    <div className="filter-container">
                        <FilterContainer returnPageName={this.parseUrl} editSlice={this.editSlice}/>
                    </div>
                    <div className="all-product"> 
                        { this.props.loading ? "Loading..." : allProducts }
                    </div> 
                    <div className="page-bar"> 
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

export default connect(mapStateToProps, { getAllProducts, updateCurrentPage } )(ProductsContainer);