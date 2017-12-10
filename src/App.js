import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './scss/vendor.scss';
import Home from './layout/Home/Home';
import { Header } from './containers/Header/Hader';
import Users from './layout/Users/Users';
import Alterations from './layout/Alterations/Alterations';
import Schedule from './layout/Schedule/Shedule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/alterations" component={Alterations} />
          <Route exact path="/schedule" component={Schedule} />
        </Switch>
      </div>
    );
  }
}

export default App;
