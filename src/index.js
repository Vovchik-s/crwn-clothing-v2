import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter is leverages the URL in order to keep track of the history of where the user is navigating through 


import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* Routes in App.js works only because it wrappet insided BrowserRouter. Its allows to read requests to diff pages*/}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
