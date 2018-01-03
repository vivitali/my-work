import React, { PureComponent } from 'react';
import { User } from '../../compoents/User/User';

export class Users extends PureComponent {
  componentDidMount() {
    this.props.onLoadData();
  }
  render() {
    const { users } = this.props;
    return (
      <div className="d-md-flex justify-content-md-center mt-5 flex-md-wrap">
        {users &&
          users.map((item, i) => (
            <User cardItem={item} key={`${item.id}_${i}`} />
          ))}
      </div>
    );
  }
}
