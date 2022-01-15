import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/normalize.css';
import './styles/webflow.css';
import './styles/doyle-performance-group.webflow.css';
import './scripts';
import IndexView from './views/IndexView';
import AthletesView from './views/AthletesView';

ReactDOM.render(
  <React.StrictMode>
    <IndexView />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
