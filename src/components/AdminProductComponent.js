import React from 'react';

const AdminProductComponent = props => {
    let p = props.product

    return (
        <p> 
            {p.id} - {p.name} - ${p.price} - {p.size} - {p.color} - {p.gender} - {p.main_category} - {
                p.sub_category} - <button onClick={() => props.deleteProduct(p.id)}> Delete </button>
        </p> 
    )
} 

export default AdminProductComponent