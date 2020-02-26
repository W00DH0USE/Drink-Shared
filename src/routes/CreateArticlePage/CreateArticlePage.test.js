import React from 'react';
import ReactDOM from 'react-dom';
import CreateArticlePage from './CreateArticlePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateArticlePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});