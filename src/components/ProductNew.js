import '../cssFolder/ProductNew.css'
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux'
import { addNewProduct } from '../actions/productActions'
 
class ProductNew extends Component {

    state ={
        name: "",
        price: "",
        image: "",
        size: "Small",
        color: "Black",
        main_category: "Top",
        sub_category: "Jacket",
        gender: "Men"
    }

    handleChange = event => {
        let state = event.target.id
        this.setState({
            [state]: event.target.value
        })
    }

    redirectToAdmin = () => {
        history.push('/admin')
    }

    handleSubmit = event => {
        event.preventDefault();
        //this.redirectToAdmin()
        const product = { name: this.state.name, price: this.state.price, image: this.state.image,
            size: this.state.size, color: this.state.color, main_category: this.state.main_category, 
            sub_category: this.state.sub_category, gender: this.state.gender
        }
        this.props.addNewProduct(product)
        alert("Product Added!");
        this.setState({
            name: "",
            price: "",
            image: ""
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.redirectToAdmin}> Back </button> 
                <h3> Add New Product </h3>
                <br/>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" placeholder="Product name.."
                        value={this.state.name} onChange={this.handleChange}
                    />
                    <br/>

                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" placeholder="0.99"
                        value={this.state.price} onChange={this.handleChange}
                    />
                    <br/>

                    <label htmlFor="image">Image Link</label>
                    <input type="text" id="image" name="image" placeholder="https://..."
                        value={this.state.image} onChange={this.handleChange}
                    />
                    <br/>

                    <label htmlFor="size">Size</label>
                    <select id="size" name="size"
                        value={this.state.size} onChange={this.handleChange}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <br/>

                    <label htmlFor="color">Color</label>
                    <select id="color" name="color"
                        value={this.state.color} onChange={this.handleChange}>
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
                    <select id="main_category" name="main_category"
                        value={this.state.mainC} onChange={this.handleChange}>
                        <option value="Top">Top</option>
                        <option value="Bottom">Bottom</option>
                        <option value="Accessory">Accessory</option>
                    </select>
                    <br/>

                    <label htmlFor="sub_category">Sub Category</label>
                    <select id="sub_category" name="sub_category"
                        value={this.state.subC} onChange={this.handleChange}>
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
                    <select id="gender" name="gender"
                        value={this.state.gender} onChange={this.handleChange}>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                    <br/>
                
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
 
export default connect(null, { addNewProduct } )(ProductNew)