import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import store from './store'
import { Provider } from 'react-redux'

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: "https://154782c5b101174ddc171cf5aca50589@o4509626278412288.ingest.us.sentry.io/4509626283393024",
  sendDefaultPii: true,
  release: "frontend@0.1.0" 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
