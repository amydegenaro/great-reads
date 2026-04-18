import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Main from './components/Main';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);
