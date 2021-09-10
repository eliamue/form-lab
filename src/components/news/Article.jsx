import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <div>
    <figure>
      <figcaption>
        {title} - {author}
      </figcaption>
      <p>{description}</p>
    </figure>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
