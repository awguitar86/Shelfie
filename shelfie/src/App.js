import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ShelfA from './components/Shelf-A/ShelfA';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
