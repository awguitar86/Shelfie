import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './shelfC.css';

class ShelfC extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <header className="shelf-header">
                    <div className="shelf-left">
                        <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                    </div>
                    <div className="shelf-right">
                        <Link to="/"><h1>SHELF C</h1></Link>
                    </div>
                </header>
                <div className="body">
                    <Link to="/" className="add">+ Add Inventory</Link>
                </div>
            </div>
        );
    }
}

export default ShelfC;