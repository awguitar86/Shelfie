import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-body">
                <header className="header">
                    <h1>SHELFIE</h1>
                </header>
            </div>
        );
    }
}

export default Home;