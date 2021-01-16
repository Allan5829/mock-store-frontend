import React from 'react';
 
const ProductShow = ({match, products}) => {
    //console.log(products, match )
    let p = products.filter(p => p.id == match.params.productId )[0]
    //console.log(p)
    return (
        <div>
            <img src={p.image} alt="Not Found" width="400" height="400"/>
            <br/>
            {p.name} for {p.price} size: {p.size} 
        </div>
    );
}
 
export default ProductShow;