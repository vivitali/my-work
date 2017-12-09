import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './scss/vendor.scss';
import Home from './layout/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
