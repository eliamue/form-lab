import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('NewsSearch', () => 
  it('displays a list of news articles', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading');
    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();

  })
);
