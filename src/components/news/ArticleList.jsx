import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <div>
    <h1>ARTICLES</h1>
    <ul aria-label="articles">
      {articles.map(({ title, author, description }) => (
        <li key={`${title}-${author}`}>
          <Article title={title} author={author} description={description} />
        </li>
      ))}
    </ul>
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default ArticleList;
