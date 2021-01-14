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

                <label htmlFor="image">Image Link</label>
                <input type="text" id="image" name="image" placeholder="https://..."/>
                <br/>

                <label htmlFor="size">Size</label>
                <select id="size" name="size">
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <br/>

                <label htmlFor="color">Color</label>
                <select id="color" name="color">
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Gray">Gray</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Multiple">Multiple</option>
                </select>
                <br/>

                <label htmlFor="main_category">Main Category</label>
                <select id="main_category" name="main_category">
                    <option value="Top">Top</option>
                    <option value="Bottom">Bottom</option>
                    <option value="Accessory">Accessory</option>
                </select>
                <br/>

                <label htmlFor="sub_category">Sub Category</label>
                <select id="sub_category" name="sub_category">
                    <option value="Jacket">Jacket</option>
                    <option value="Sweater">Sweater</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Pants">Pants</option>
                    <option value="Shorts">Shorts</option>
                    <option value="Socks">Socks</option>
                    <option value="Hat">Hat</option>
                    <option value="Belt">Belt</option>
                </select>
                <br/>

                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender">
                    <option value="Men">Men</option>
                    <option value="Woman">Woman</option>
                </select>
                <br/>
            
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default ProductNew;