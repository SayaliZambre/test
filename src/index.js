import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
