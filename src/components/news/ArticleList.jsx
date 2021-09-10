import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map(({ title, author, description }) => (
      <li key={`${title}-${author}`}>
        <Article title={title} author={author} description={description} />
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default ArticleList;
