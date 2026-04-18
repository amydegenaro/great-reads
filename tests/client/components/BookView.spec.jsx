import React from 'react';
import { render, screen } from '../../test-utils';
import BookView from '../../../client/components/BookView';

describe('BookView component', () => {
  const mockDetails = {
    author: [{ name: 'Test Author' }],
    cover: 'test-cover.jpg',
    date: '2020',
    description: 'Test Description',
    title: 'Test Book',
    pages: '123',
  };

  it('renders book details correctly', () => {
    render(<BookView details={mockDetails} />);
    expect(screen.getByRole('img', { alt: 'selected book cover' })).toHaveAttribute('src', 'test-cover.jpg');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Book');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('by Test Author');
    expect(screen.getByText('123 pages')).toBeInTheDocument();
    expect(screen.getByText('First published in 2020')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('displays error message when title is missing', () => {
    render(<BookView details={{}} />);
    expect(screen.getByText('Could not find book details.')).toBeInTheDocument();
  });

  it('calls clearSelectedBook when back button is clicked', () => {
    const mockClearSelectedBook = jest.fn();
    render(<BookView details={mockDetails} clearSelectedBook={mockClearSelectedBook} />);
    const backButton = screen.getByRole('button', { name: 'Back to results' });
    backButton.click();
    expect(mockClearSelectedBook).toHaveBeenCalled();
  });
});
