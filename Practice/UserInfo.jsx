import React from 'react';
import Avatar from './Avatar';

const UserInfo = props => (
  <div>
    <Avatar user={props.user} />
    <div>
      {props.user.name}
    </div>
  </div>
);

export default UserInfo;
