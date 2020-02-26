import React from 'react';
import ReactDOM from 'react-dom';
import ArticlePage from './ArticlePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticlePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});