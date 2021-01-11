// each indvidual product
import '../cssFolder/ProductComponent.css';
import React from 'react';


const ProductComponent = props => (
    <div> 
        {props.product.name} for {props.product.price} size: {props.product.size}
    </div> 
)  

export default ProductComponent