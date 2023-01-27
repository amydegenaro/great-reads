import { createStore, applyMiddleware, compose } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// INITIAL STORE STATE
const initialState = {
  searchResults: [],
  foundResults: null,
  selectedBook: {},
  loading: false,
};

// ACTION TYPES
const GOT_RESULTS_BY_TITLE = 'GOT_RESULTS_BY_TITLE';
const NO_RESULTS_FOUND = 'NO_RESULTS_FOUND';
const GOT_BOOK_DETAILS = 'GOT_BOOK_DETAILS';
const REMOVED_RESULTS = 'REMOVED_RESULTS';
const REMOVED_SELECTION = 'REMOVED_SELECTION';
const DATA_LOADING = 'DATA_LOADING';

// ACTION CREATORS
const gotResultsByTitle = (list) => ({
  type: GOT_RESULTS_BY_TITLE,
  list,
});

const noResultsFound = () => ({
  type: NO_RESULTS_FOUND,
});

const gotBookDetails = (details, description) => ({
  type: GOT_BOOK_DETAILS,
  details,
  description,
});

const removedResults = () => ({
  type: REMOVED_RESULTS,
});

const removedSelection = () => ({
  type: REMOVED_SELECTION,
});

const dataLoading = () => ({
  type: DATA_LOADING,
});

// THUNK CREATORS
export const getResultsByTitle = (search) => async (dispatch) => {
  try {
    const { data } = await axios.post('/.netlify/functions/index/api/search/title', { search });
    if (data.length === 0) {
      dispatch(noResultsFound());
    } else {
      dispatch(gotResultsByTitle(data));
    }
  } catch (err) {
    console.error(err);
  }
};

export const getBookDetails = (book) => async (dispatch) => {
  try {
    const { openLibID, worksID } = book;
    const bookRes = await axios.post('/.netlify/functions/index/api/book/', { openLibID });
    const descriptionRes = await axios.post('/.netlify/functions/index/api/book/description', {
      worksID,
    });
    dispatch(gotBookDetails(bookRes.data, descriptionRes.data));
  } catch (err) {
    console.error(err);
  }
};

export const removeResults = () => (dispatch) => {
  try {
    dispatch(removedResults());
  } catch (err) {
    console.error(err);
  }
};

export const removeSelection = () => (dispatch) => {
  try {
    dispatch(removedSelection());
  } catch (err) {
    console.error(err);
  }
};

export const showLoading = () => (dispatch) => {
  try {
    dispatch(dataLoading());
  } catch (err) {
    console.error(err);
  }
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_RESULTS_BY_TITLE:
      return {
        ...state,
        searchResults: action.list,
        foundResults: true,
        loading: false,
      };
    case NO_RESULTS_FOUND:
      return {
        ...state,
        foundResults: false,
        loading: false,
      };
    case GOT_BOOK_DETAILS:
      return {
        ...state,
        selectedBook: { ...action.details, description: action.description },
        loading: false,
      };
    case REMOVED_RESULTS:
      return initialState;
    case REMOVED_SELECTION:
        return {
          ...state,
          selectedBook: {},
        };
    case DATA_LOADING:
      return {
        ...state,
        loading: true,
        foundResults: null,
      };
    default:
      return state;
  }
};

/* eslint-disable no-underscore-dangle, no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware, loggingMiddleware)
  )
);

export default store;
