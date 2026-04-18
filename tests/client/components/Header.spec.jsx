import React from 'react';
import { fireEvent, render, screen } from '../../test-utils';
import Header from '../../../client/components/Header';

describe('Header component', () => {
  it('renders the header title and nav links', () => {
    const clearSearchResults = jest.fn();
    render(<Header clearSearchResults={clearSearchResults} />);

    expect(screen.getByRole('heading')).toHaveTextContent('GreatReads.');

    // Check if the nav links are rendered
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Vote')).toBeInTheDocument();
  });

  it('calls clearSearchResults when the header title is clicked', () => {
    const clearSearchResults = jest.fn();
    render(<Header clearSearchResults={clearSearchResults} />);

    fireEvent.click(screen.getByText('GreatReads.'));
    expect(clearSearchResults).toHaveBeenCalled();
  });
});
