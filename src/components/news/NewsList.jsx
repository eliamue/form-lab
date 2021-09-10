import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map(({ title, author, description }) => (
      <li key={`${title}-${author}`}>
        <News title={title} author={author} description={description} />
      </li>
    ))}
  </ul>
);

NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default NewsList;
