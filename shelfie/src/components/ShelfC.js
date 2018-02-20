import React, { Component } from 'react';
import '../App.css';

class ShelfC extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="body">
                    <button>+ Add Inventory</button>
                </div>
            </div>
        );
    }
}

export default ShelfC;