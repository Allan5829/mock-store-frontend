import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminContainer extends Component {

    state = {
        displayComponent: false,
        currentComponent: ""
    }

    handleClick = event => {
        console.log(event.target.id)
    }

    render() {
        return (
            <div>
                "admin container"
                <br/>
                <Link onClick={this.handleClick} id='new product' to={`/admin/product_new`}> Add New Product </Link>
            </div>
        );
    }
}

export default AdminContainer;