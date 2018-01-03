import React, { PureComponent } from 'react';
import { Actions } from '../Actions/Actions';
import './home.scss';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="container main-block">
        <Actions />
      </div>
    );
  }
}
