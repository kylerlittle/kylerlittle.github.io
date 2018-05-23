import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// This is where we do the DOM injection
ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
