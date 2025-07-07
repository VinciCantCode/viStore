import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';


import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

Sentry.init({
  dsn: "https://154782c5b101174ddc171cf5aca50589@o4509626278412288.ingest.us.sentry.io/4509626283393024",
  sendDefaultPii: true
});

const container = document.getElementById('root');
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
