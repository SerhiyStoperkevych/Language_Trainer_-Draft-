import { store } from './store';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App.js';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
