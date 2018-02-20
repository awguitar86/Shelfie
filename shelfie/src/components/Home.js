import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="body">
                    <Link to="/shelfa">Shelf A</Link>
                    <Link to="/shelfb">Shelf B</Link>
                    <Link to="/shelfc">Shelf C</Link>
                    <Link to="/shelfd">Shelf D</Link>
                </div>
            </div>
        );
    }
}

export default Home;