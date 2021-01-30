import '../cssFolder/ProductComponent.css';
import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getProduct } from '../actions/productActions'

class ProductShow extends Component {
    
    componentDidMount() {
        this.props.getProduct(this.props.match.params.productId)
    }
    
    render() {
        let p = this.props.product
        
        return (
            <div className="product-details">
                { this.props.loading ? "Loading" : 
                <div>
                    <img src={p.image} alt="Not Found" width="400" height="400" className="product-show"/> 
                    <br/> <br/>
                    ${p.price} - {p.name} <br/>
                    Size: {p.size} <br/>
                    Color: {p.color} <br/>
                    <br/>
                    Other Details <br/>
                    <ul> 
                        <li> {p.main_category} </li>
                        <li> {p.sub_category} </li>
                        <li> {p.gender} </li>
                    </ul>
                    <br/>
                    <button onClick={() => this.props.history.goBack()}> Back </button>
                </div>
                }
                
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    let s = state.productReducer
    return {
        product: s.currentProduct,
        loading: s.loading
    }
}
 
export default connect(mapStateToProps, { getProduct } )(ProductShow);