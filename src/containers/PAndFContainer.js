import '../cssFolder/ProductContainer.css';
import React from 'react';
import ProductsContainer from './ProductsContainer'

const ProductAndFilterContainer = ({match}) => {
    return (
       <div>
            <div className="filter-container">
            </div>
            <div className="all-product"> 
                < ProductsContainer match={match} /> 
            </div> 
        </div> 
    )
     
}

export default ProductAndFilterContainer