import React from 'react';
import { render, screen } from '../../test-utils';
import Home from '../../../client/components/Home';

describe('Home component', () => {
  it('renders the title with search box', () => {
    render(
      <Home
        foundResults={null}
        handleSearch={() => { }}
        handleSubmit={() => { }}
        loading={false}
        title=""
      />
    );
    expect(screen.getByRole('heading')).toHaveTextContent('GreatReads.');
    expect(screen.getByPlaceholderText('search by title')).toBeInTheDocument();
  });

  it('displays loading message when loading is true', () => {
    render(
      <Home
        foundResults={null}
        handleSearch={() => { }}
        handleSubmit={() => { }}
        loading
        title=""
      />
    );
    expect(screen.getByText('Searching the shelves...')).toBeInTheDocument();
  });

  it('displays "no results" message when foundResults is false', () => {
    render(
      <Home
        foundResults={false}
        handleSearch={() => { }}
        handleSubmit={() => { }}
        loading={false}
        title=""
      />
    );
    expect(screen.getByText('No books found, try again.')).toBeInTheDocument();
  });

  it('does NOT display "no results" message when foundResults is undefined', () => {
    render(
      <Home
        foundResults={undefined}
        handleSearch={() => { }}
        handleSubmit={() => { }}
        loading={false}
        title=""
      />
    );
    expect(screen.queryByText('No books found, try again.')).not.toBeInTheDocument();
  });
});
