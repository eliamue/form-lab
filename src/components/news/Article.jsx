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
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
