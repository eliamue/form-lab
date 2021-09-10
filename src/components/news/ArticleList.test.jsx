import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  it('displays a list of articles', () => {
    render(
      <ArticleList
        articles={[
          {
            // eslint-disable-next-line max-len
            title: 'Stephen King quiere más películas de ‘Sharknado’ y ofrece un par de ideas',
            author: 'Hipersónica',
            // eslint-disable-next-line max-len
            description: 'Quizá un día toque hacer una reivindicación sentida de las películas de Sharknado. Quizás. De lo que no cabe duda es que las chifladas películas de desastres no le hacen ningún mal a nadie e incluso le pueden salvar una tarde de domingo muy aburrida. No sabem…',
          },
          {
            // eslint-disable-next-line max-len
            title: 'Sharknado: The Complete 6-Movie Saga in HD Digital for $4.99 at Microsoft',
            author: 'cheebong',
            // eslint-disable-next-line max-len
            description: 'Microsoft has Sharknado: The Complete Saga for $4.99. TODAY only. It is NOT Movies Anywhere, so no port. Own all 6 Sharknado films – the entire saga! Take the journey from the first storm, crushi ...',
          },
        ]}
      />
    );

    const ul = screen.getByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});
