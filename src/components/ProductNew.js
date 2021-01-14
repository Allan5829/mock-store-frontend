import '../cssFolder/ProductNew.css'
import React from 'react';
import { Link } from 'react-router-dom';
 
const ProductNew = (props) => {

    return (
        <div>
            <Link onClick={props.backButton} to={`/admin`}> Back </Link> 
            <h3> Add New Product </h3>
            <br/>
            <form>
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" name="name" placeholder="Product name.."/>
                <br/>

                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" placeholder="0.99"/>
                <br/>

                <label htmlFor="size">Size</label>
                <select id="size" name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br/>
            
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default ProductNew;