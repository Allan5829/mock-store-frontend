import '../cssFolder/ProductContainer.css';
import React from 'react';
import ProductsContainer from './ProductsContainer'

const ProductAndFilterContainer = () => (
    <div>
        <div className="filter-container">
        </div>
        <div className="all-product"> 
            < ProductsContainer /> 
        </div> 
    </div> 
)  

export default ProductAndFilterContainer