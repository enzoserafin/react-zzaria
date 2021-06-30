import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import reportWebVitals from './reportWebVitals'

import ErrorBoundary from './error'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <React.StrictMode>
        <Root hasError={hasError} />
      </React.StrictMode>
    )}
  </ErrorBoundary>,
  document.getElementById('root')
)

reportWebVitals()
