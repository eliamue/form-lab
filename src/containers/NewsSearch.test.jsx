import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('NewsSearch', () => 
  it('displays a list of news articles', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading');
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();

    // const input = await screen.findByLabelText('Title');
    // userEvent.type(input, 'Amazon');
    // // eslint-disable-next-line max-len
    // const submitButton = await screen.findByRole('button', { name: 'find-articles', });
    // userEvent.click(submitButton);

    // return waitFor(() => {
    //   const articles = screen.getAllByText('CNBC', { exact: false });

    //   expect(articles).not.toBeEmptyDOMElement();
    // });
  })
);
