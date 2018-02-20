import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-wrapper">
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