import React, { PureComponent } from 'react';
import { Calendar } from '../../compoents/Calendar/Calendar';

export default class Schedule extends PureComponent {
  render() {
    return (
      <div className="container-fluid main-block">
        Розклад
        <Calendar />
      </div>
    );
  }
}
