/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react';
import { fireEvent, screen, waitFor } from '../../test-utils';
import Main from '../../../client/components/Main';

jest.mock('react-redux', () => ({
  connect: jest.fn(() => (x) => x),
}));

jest.mock('../../../client/components/Voting', () => () => <div data-testid="voting">Voting</div>);

jest.mock('../../../client/store', () => ({
  fetchResultsByTitle: jest.fn(),
  fetchBookDetails: jest.fn(),
  tryRemoveResults: jest.fn(),
  tryRemoveSelection: jest.fn(),
  tryShowLoading: jest.fn(),
}));

describe('Main component', () => {
  const props = {
    details: {
      title: 'Test Book',
      author: [{ name: 'Test Author' }],
      cover: 'test-cover.jpg',
      date: '2020',
      description: 'This is a test book.',
      pages: '300',
    },
    foundResults: [],
    getBookDetails: jest.fn(),
    getResultsByTitle: jest.fn(),
    loading: false,
    removeResults: jest.fn(),
    removeSelection: jest.fn(),
    results: [{
      author: 'Test Author',
      title: 'Test Book',
      worksID: 'OL12345W',
      editions: '5',
      year: '2020',
      tags: ['Test Tag'],
    }],
    showLoading: jest.fn(),
  };

  const renderWithRouter = ({ route }) => render(
    <MemoryRouter initialEntries={[route]}>
      <Main {...props} />
    </MemoryRouter>
  );

  describe('renders routes correctly', () => {
    it('renders Home component at root path', () => {
      renderWithRouter({ route: '/' });
      expect(screen.getByTestId('Home')).toBeInTheDocument();
    });

    it('renders Header and ResultsView component at /search path', () => {
      renderWithRouter({ route: '/search' });
      expect(screen.getByTestId('Header')).toBeInTheDocument();
      expect(screen.getByTestId('ResultsView')).toBeInTheDocument();
    });

    it('renders Header and BookView component at /book path', () => {
      renderWithRouter({ route: '/book' });
      expect(screen.getByTestId('Header')).toBeInTheDocument();
      expect(screen.getByTestId('BookView')).toBeInTheDocument();
    });

    it('renders Header and Voting component at /vote path', () => {
      renderWithRouter({ route: '/vote' });
      expect(screen.getByTestId('Header')).toBeInTheDocument();
      expect(screen.getByTestId('voting')).toBeInTheDocument();
    });
  });

  describe('handlers work correctly', () => {
    it('handleSubmit calls showLoading, getResultsByTitle, and navigate to ResultsView', async () => {
      renderWithRouter({ route: '/' });

      const searchBox = screen.getByPlaceholderText('search by title');
      fireEvent.change(searchBox, { target: { value: 'test book' } });
      fireEvent.submit(screen.getByRole('form'));

      await waitFor(() => {
        expect(props.showLoading).toHaveBeenCalled();
        expect(props.getResultsByTitle).toHaveBeenCalledWith('test book');
        expect(screen.getByTestId('ResultsView')).toBeInTheDocument();
      });
    });

    it('handleSort sets sort order (relevance, year, or most editions)', async () => {
      renderWithRouter({ route: '/search' });

      const relevanceButton = screen.getByRole('button', { name: 'Relevance' });
      fireEvent.click(relevanceButton);
      expect(relevanceButton).toHaveClass('btn-active');

      const yearButton = screen.getByRole('button', { name: 'Year Published' });
      fireEvent.click(yearButton);
      expect(yearButton).toHaveClass('btn-active');

      const editionsButton = screen.getByRole('button', { name: 'Most Editions' });
      fireEvent.click(editionsButton);
      expect(editionsButton).toHaveClass('btn-active');
    });

    it('clearSearchResults clears results on header click', async () => {
      renderWithRouter({ route: '/search' });

      const searchBox = screen.getByPlaceholderText('Search by title');
      fireEvent.change(searchBox, { target: { value: 'test book' } });
      fireEvent.submit(screen.getByRole('form'));
      expect(props.getResultsByTitle).toHaveBeenCalledWith('test book');

      const homeLink = screen.getByRole('link', { name: 'GreatReads.' });
      fireEvent.click(homeLink);

      await waitFor(() => {
        expect(props.removeResults).toHaveBeenCalled();
        expect(screen.getByPlaceholderText('search by title')).toHaveValue('');
      });
    });

    it('clearFilters clears author, tags, and year filters', async () => {
      renderWithRouter({ route: '/search' });

      fireEvent.change(screen.getByLabelText('Author'), { target: { value: 'Test Author' } });
      fireEvent.change(screen.getByLabelText('Tags'), { target: { value: 'Test Tag' } });
      fireEvent.change(screen.getByLabelText('Year Published'), { target: { value: '2020' } });

      fireEvent.click(screen.getByRole('button', { name: 'Clear Filters' }));

      await waitFor(() => {
        expect(screen.getByLabelText('Author')).toHaveValue('All');
        expect(screen.getByLabelText('Tags')).toHaveValue('All');
        expect(screen.getByLabelText('Year Published')).toHaveValue('All');
      });
    });

    it('selectBook calls showLoading, getBookDetails, and navigate to BookView', async () => {
      renderWithRouter({ route: '/search' });

      fireEvent.click(screen.getByRole('button', { name: 'Test Book' }));

      await waitFor(() => {
        expect(props.showLoading).toHaveBeenCalled();
        expect(props.getBookDetails).toHaveBeenCalledWith(props.results[0]);
        expect(screen.getByTestId('BookView')).toBeInTheDocument();
      });
    });

    it('clearSelectedBook calls removeSelection, then navigate to ResultsView', async () => {
      renderWithRouter({ route: '/search' });

      fireEvent.click(screen.getByRole('button', { name: 'Test Book' }));

      await waitFor(() => {
        expect(screen.getByTestId('BookView')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByRole('button', { name: 'Back to results' }));

      await waitFor(() => {
        expect(props.removeSelection).toHaveBeenCalled();
        expect(screen.getByTestId('ResultsView')).toBeInTheDocument();
      });
    });
  });
});
