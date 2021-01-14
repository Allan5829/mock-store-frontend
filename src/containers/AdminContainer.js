import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductNew from '../components/ProductNew'

class AdminContainer extends Component {

    state = {
        displayComponent: false,
        currentComponent: ""
    }

    handleClick = event => {
        console.log(event.target.id)
        this.setState({
            displayComponent: true,
            currentComponent: event.target.id
        })
        
    }

    render() {

        let test = "I shouldn't see this"

        if (this.state.currentComponent === 'ProductNew') {
            test = <ProductNew/>
        }

        return (
            <div>
                "admin container"
                <br/>
                <Link onClick={this.handleClick} id='ProductNew' to={`/admin/product_new`}> Add New Product </Link>
                {this.state.displayComponent ? test : null }
            </div>
        );
    }
}

export default AdminContainer;