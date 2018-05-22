import React from 'react';
import { Route } from 'react-router-dom';

// Import page components
import App from './App';
import Home from './pages/Home';
import Thoughts from './pages/Thoughts';
import Travels from './pages/Travels';

// Export the Route with JSX
export default (
	<Route exact path="/" component={Home}>
	<Route path="/thoughts" component={Thoughts} />
	<Route path="/travels" component={Travels} />
);
