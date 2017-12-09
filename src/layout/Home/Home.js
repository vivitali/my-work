import React, { PureComponent } from 'react';
import { Header } from '../../containers/Header/Hader';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row" />
      </div>
    );
  }
}
