import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Home from './layout/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
