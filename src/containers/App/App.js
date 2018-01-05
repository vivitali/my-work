import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './../../scss/vendor.scss';
import Home from './../Home/Home';
import { Header } from './../Header/Hader';
import Users from './../Users/loadable';
import Alterations from './../Alterations/loadable';
import Schedule from './../Schedule/Shedule';
import moment from 'moment/moment';

class App extends Component {
  componentWillMount () {
    this.props.onLoadData();
  }
  render() {
    moment.locale('uk');
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/alterations" component={Alterations} />
          <Route exact path="/alterations/:id" component={Alterations} />
          <Route exact path="/schedule" component={Schedule} />
        </Switch>
      </div>
    );
  }
}

export default App;
