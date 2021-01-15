import '../cssFolder/ProductContainer.css';
import React from 'react';
import ProductsContainer from './ProductsContainer'

const ProductAndFilterContainer = ({match, filterTerm}) => {
    return (
       <div>
            <div className="filter-container">
            </div>
            <div className="all-product"> 
                < ProductsContainer match={match} filterTerm={filterTerm}/> 
            </div> 
        </div> 
    )
     
}

export default ProductAndFilterContainer