import React from 'react';
import ReactDOM from 'react-dom';
import ArticleListItem from './ArticleListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const article = {
    id: 1,
    style: 'Test',
    title: 'Test',
    author_id: 1,
    ingredients: 'Test',
    Directions: 'Test',
    author: {
      id: 1
    }
  }
  
  ReactDOM.render(<ArticleListItem article={article} />, div);
  ReactDOM.unmountComponentAtNode(div);
});