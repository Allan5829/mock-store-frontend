// each indvidual product
import '../cssFolder/ProductComponent.css';
import React from 'react';

const ProductComponent = props => (
    <div class='square-box'> 
        <div class='square-content'>
            <div><span> 
                <img src={props.product.image} alt="Not Found" width="200" height="200"/>
                <br/>
                {props.product.name} for {props.product.price} size: {props.product.size} 
            </span></div>
        </div>
    </div> 
)  

export default ProductComponent