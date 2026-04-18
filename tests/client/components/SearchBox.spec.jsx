import React from 'react';
import { fireEvent, render, screen } from '../../test-utils';
import SearchBox from '../../../client/components/SearchBox';

describe('SearchBox component', () => {
  it('renders the search box', () => {
    render(
      <SearchBox
        handleSearch={() => { }}
        handleSubmit={() => { }}
        title=""
      />
    );
    const searchBox = screen.getByPlaceholderText('search by title');
    expect(searchBox).toBeInTheDocument();
  });

  it('calls handleSearch on input change', () => {
    const handleSearchMock = jest.fn();
    render(
      <SearchBox
        handleSearch={handleSearchMock}
        handleSubmit={() => { }}
        title=""
      />
    );
    const searchBox = screen.getByPlaceholderText('search by title');
    fireEvent.change(searchBox, { target: { value: 'Test search input' } });
    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });

  it('calls handleSubmit on form submit', () => {
    const handleSubmitMock = jest.fn();
    render(
      <SearchBox
        handleSearch={() => { }}
        handleSubmit={handleSubmitMock}
        title=""
      />
    );
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});
