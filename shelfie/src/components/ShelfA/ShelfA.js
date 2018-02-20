import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import '../../App.css';

class ShelfA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <header className="shelf-a-header">
                    <div className="a-left">
                        <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                    </div>
                    <div className="a-right">
                        <Link to="/"><h1>SHELF A</h1></Link>
                    </div>
                </header>
                <div className="body">
                    <Link to="/" className="add">+ Add Inventory</Link>
                </div>
            </div>
        );
    }
}

export default ShelfA;