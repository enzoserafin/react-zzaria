import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';

import ErrorBoundary from './error'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )}
  </ErrorBoundary>,
  document.getElementById('root')
);

reportWebVitals();
