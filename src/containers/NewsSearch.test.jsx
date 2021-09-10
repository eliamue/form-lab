import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('NewsSearch', () => 
  it('displays a list of news articles', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading');
    const ul = await screen.findByRole('list');
    expect(ul).toMatchSnapshot();

    const input = await screen.findByLabelText('Search by Keyword in Title:');
    userEvent.type(input, 'Sharknado');
    // eslint-disable-next-line max-len
    const submitButton = await screen.findByRole('button', { name: 'find-articles', });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('Sharknado', { exact: false });

      expect(articles).toMatchSnapshot();
    });
  })
);
