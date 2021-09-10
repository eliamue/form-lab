import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Controls', () => {
  it('displays a form', () => {
    render(
      <Search
        articleTitle="Bender"
        onCArticleTitleChange={() => {}}
        onSubmit={() => {}}
      />
    );

    const form = screen.getByTestId('search-form');
    expect(form).toMatchSnapshot();
  });
});
