import React, { Fragment } from 'react';
import FormatDate from './FormatDate';
import UserInfo from './UserInfo';

// eslint-ignore-next-line react/prop-types
const App = ({ author, text }) => ( // eslint-ignore-line

  <Fragment>
    <UserInfo user={author} />
    {text}
    <FormatDate />
  </Fragment>
);

export default App;
