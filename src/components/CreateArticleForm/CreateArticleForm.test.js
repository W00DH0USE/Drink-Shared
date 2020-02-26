import React from 'react';
import ReactDOM from 'react-dom';
import CreateArticleForm from './CreateArticleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateArticleForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});