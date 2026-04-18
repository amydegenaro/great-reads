import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react';
import { render, screen } from '../../test-utils';
import Nav from '../../../client/components/Nav';

describe('Nav component', () => {
  it('renders the nav links', () => {
    render(<Nav />);

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Vote')).toBeInTheDocument();
  });

  it('applies active class to the Search nav link', () => {
    rtlRender(
      <MemoryRouter initialEntries={['/search']}>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByText('Search')).toHaveClass('active');
  });

  it('applies active class to the Vote nav link', () => {
    rtlRender(
      <MemoryRouter initialEntries={['/vote']}>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByText('Vote')).toHaveClass('active');
  });
});
