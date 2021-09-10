import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ articleTitle, onArticleTitleChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="articleTitle">Title</label>
    <input
      id="articleTitle"
      type="type"
      value={articleTitle}
      onChange={onArticleTitleChange}
    />
    <button aria-label="find-articles">Submit</button>
  </form>
);

Controls.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  onArticleTitleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
