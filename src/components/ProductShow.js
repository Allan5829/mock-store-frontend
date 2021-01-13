import React from 'react';
 
const ProductShow = ({match, products}) => {
    let p = products[match.params.productId]
    return (
        <div>
            <img src={p.image} alt="Not Found" width="200" height="200"/>
            <br/>
            {p.name} for {p.price} size: {p.size} 
        </div>
    );
}
 
export default ProductShow;