import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import { App } from '@application';

import reportWebVitals from './report-web-vitals';

import '@infrastructure/styles/base/_reset.scss';
import '@infrastructure/styles/base/_global.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
