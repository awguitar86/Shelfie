import React, { Component } from 'react';
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
                    <img src={Logo} alt="shelfi logo"/>
                    <h1>SHELFIE</h1>
                </div>
            </header>
        );
    }
}

export default Header;