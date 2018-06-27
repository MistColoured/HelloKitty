import React from 'react';
import ReactDOM from 'react-dom';
import App from './OtherApp';


const comment = {
  date: new Date(),
  text:
    'Mike is making this work!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:
      'http://placekitten.com/198/198',
  },
};
ReactDOM.render(<App
  date={comment.date}
  text={comment.text}
  author={comment.author}
/>, document.getElementById('app'));
