import React, { Component } from 'react';
import './home.css';
import Logo from '../../assets/logo.png';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-wrapper">
                <header className="header">
                    <div>
                        <img src={Logo} alt="shelfi logo"/>
                        <h1>SHELFIE</h1>
                    </div>
                </header>
                <div className="home-body">
                    <button>Shelf A</button>
                    <button>Shelf B</button>
                    <button>Shelf C</button>
                    <button>Shelf D</button>
                </div>
            </div>
        );
    }
}

export default Home;