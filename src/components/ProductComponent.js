// each indvidual product
import '../cssFolder/ProductComponent.css';
import React from 'react';


const ProductComponent = props => (
    <div class='square-box'> 
        <div class='square-content'>
            <div><span> 
                {props.product.name} for {props.product.price} size: {props.product.size} 
            </span></div>
        </div>
    </div> 
)  

export default ProductComponent