import '../cssFolder/ProductComponent.css';
import React, { Component } from 'react';

import { connect } from 'react-redux'
import { } from '../actions/productActions'

class ProductShow extends Component {
    //console.log(match, match.params.productId)
    
    render() {
        console.log(this.props.match.params.productId)
        let p = this.props.products[this.props.match.params.productId]
        console.log(p)
        return (
            <div className="product-details">
                { this.props.loading ? null : 
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
                </div>
                }
                
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    let s = state.productReducer
    return {
        products: s.products,
        loading: s.loading,
        sliceStart: s.sliceStart,
        sliceEnd: s.sliceEnd
    }
}
 
export default connect(mapStateToProps)(ProductShow);