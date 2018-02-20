import React, { Component } from 'react';
import './shelfA.css';

class ShelfA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="home-body">
                    <button>+ Add Inventory</button>
                </div>
            </div>
        );
    }
}

export default ShelfA;