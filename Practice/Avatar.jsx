import React from 'react';

const Avatar = props => (
  <div>
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  </div>
);

export default Avatar;
