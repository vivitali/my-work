import React, { PureComponent } from 'react';
import users from '../../json/users';
import { User } from '../../compoents/User/User';

export class Users extends PureComponent {
  render() {
    return (
      <div className="d-md-flex justify-content-md-center mt-5 flex-md-wrap">
        {users.map((item, i) => (
          <User cardItem={item} key={`${item.id}_${i}`} />
        ))}
      </div>
    );
  }
}
