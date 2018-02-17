import React, { PureComponent } from 'react';
import { Calendar } from '../../compoents/Calendar/Calendar';

export default class Schedule extends PureComponent {
  componentDidMount() {
    this.props.onLoadData();
  }
  render() {
    return (
      <div className="container-fluid main-block">
        Розклад
        <Calendar users={this.props.users} />
      </div>
    );
  }
}
