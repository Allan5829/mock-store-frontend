import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductNew from '../components/ProductNew'

class AdminContainer extends Component {

    state = {
        displayComponent: false,
        currentComponent: ""
    }

    handleClick = event => {
        //console.log(event.target.id)
        this.setState({
            displayComponent: true,
            currentComponent: event.target.id
        })
        
    }

    handleBackButton = event => {
        //console.log("do i see me")
        this.setState({
            displayComponent: false,
            currentComponent: ""
        })
    }

    render() {

        let test = "I shouldn't see this"

        if (this.state.currentComponent === 'ProductNew') {
            test = <ProductNew backButton={this.handleBackButton}/>
        }

        // turn into component
        const links = [
            "admin text", <br/>,
            <Link onClick={this.handleClick} id='ProductNew' to={`/admin/product_new`}> Add New Product </Link>,
            <br/>,
            <Link onClick={this.handleClick} id='ProductNew' to={`/admin/product_new`}> Add New Product </Link>
        ]

        return (
            <div>
                {this.state.displayComponent ? test : links }
            </div>
        );
    }
}

export default AdminContainer;