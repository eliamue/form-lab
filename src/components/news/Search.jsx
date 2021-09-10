import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ articleTitle, onArticleTitleChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="articleTitle">Search by Keyword in Title: </label>
    <input
      id="articleTitle"
      type="type"
      value={articleTitle}
      onChange={onArticleTitleChange}
    />
    <button aria-label="find-articles">Submit</button>
  </form>
);

Search.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  onArticleTitleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
