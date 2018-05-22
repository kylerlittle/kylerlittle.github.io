import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// This is where we do the DOM injection
ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
