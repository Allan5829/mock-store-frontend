import '../cssFolder/ProductComponent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = props => {
    let p = props.product
    return (
        <div className='square-box'> 
            <div className='square-content'>
                <div><span> 
                    <Link key={p.id} to={`/product/${p.id}`}>
                        <img src={p.image} alt="Not Found" width="200" height="200"/>
                    </Link>
                    <br/>
                    ${p.price} - {p.name}
                    <br/>
                    Size: {p.size} 
                </span></div>
            </div>
        </div> 
    )
}  

export default ProductComponent