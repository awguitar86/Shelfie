import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import '../../App.css';

class ShelfD extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <header className="shelf-d-header">
                    <div>
                        <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                        <Link to="/"><h1>SHELF D</h1></Link>
                    </div>
                </header>
                <div className="body">
                    <button>+ Add Inventory</button>
                </div>
            </div>
        );
    }
}

export default ShelfD;