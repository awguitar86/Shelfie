import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home';
import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/shelfa" component={ShelfA}/>
        <Route path="/shelfb" component={ShelfB}/>
        <Route path="/shelfc" component={ShelfC}/>
        <Route path="/shelfd" component={ShelfD}/>
      </div>
    );
  }
}

export default App;
