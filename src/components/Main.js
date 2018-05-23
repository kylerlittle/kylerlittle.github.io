import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Thoughts from '../pages/Thoughts';
import Travels from '../pages/Travels';
import About from '../pages/About';
import Signin from '../pages/Signin';

class Main extends Component {
    render() {
	return (
	<main>
	<Switch>
	<Route exact path="/" component={Home} />
	<Route path="/thoughts" component={Thoughts} />
	<Route path="/travels" component={Travels} />
	<Route path="/about" component={About} />
	<Route path="/signin" component={Signin} />
	</Switch>
	</main>
	);
    }
}

export default Main;
