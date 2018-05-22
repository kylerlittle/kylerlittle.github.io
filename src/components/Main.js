import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Thoughts from '../pages/Thoughts';
import Travels from '../pages/Travels';

class Main extends Component {
    render() {
	return (
	<main>
	<Switch>
	<Route exact path="/" component={Home} />
	<Route path="/thoughts" component={Thoughts} />
	<Route path="/travels" component={Travels} />
	</Switch>
	</main>
	);
    }
}

export default Main;
