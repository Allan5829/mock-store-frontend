import React from 'react';
 
const ProductShow = ({match, products}) => {
    //console.log(products, match )
    let p = products.filter(p => p.id == match.params.productId )[0]
    //console.log(p)
    return (
        <div className="product-details">
            <img src={p.image} alt="Not Found" width="400" height="400"/> <br/>
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
    );
}
 
export default ProductShow;