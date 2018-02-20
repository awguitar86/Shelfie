import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div>
                    <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                    <Link to="/"><h1>SHELFIE</h1></Link>
                </div>
            </header>
        );
    }
}

export default Header;