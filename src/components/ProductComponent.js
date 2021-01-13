import '../cssFolder/ProductComponent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = props => (
    <div class='square-box'> 
        <div class='square-content'>
            <div><span> 
                <Link key={props.product.id} to={`/products/${props.product.id}`}>
                    <img src={props.product.image} alt="Not Found" width="200" height="200"/>
                </Link>
                <br/>
                {props.product.name} for {props.product.price} size: {props.product.size} 
                <br/>
                
            </span></div>
        </div>
    </div> 
)  

export default ProductComponent