import React from 'react';

const AdminProductComponent = props => {
    let p = props.product

    return (
        <p> 
            {p.id} - Name: {p.name} - ${p.price} - Size: {p.size} - <button 
                onClick={() => props.deleteProduct(p.id)}> Delete </button>
        </p> 
    )
} 

export default AdminProductComponent