import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
  it('displays a article', () => {
    render(
      <Article
        author="cheebong"
        // eslint-disable-next-line max-len
        title="Sharknado: The Complete 6-Movie Saga in HD Digital for $4.99 at Microsoft"
        // eslint-disable-next-line max-len
        description="Microsoft has Sharknado: The Complete Saga for $4.99. TODAY only. It is NOT Movies Anywhere, so no port. Own all 6 Sharknado films – the entire saga! Take the journey from the first storm, crushi ..."
      />
    );
    // eslint-disable-next-line max-len
    const article = screen.getByText('Sharknado: The Complete 6-Movie Saga in HD Digital for $4.99 at Microsoft - cheebong');
    expect(article).toMatchSnapshot();
  });
});
