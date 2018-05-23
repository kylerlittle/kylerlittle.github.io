import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Thoughts from '../pages/Thoughts';
import Travels from '../pages/Travels';
import About from '../pages/About';
import Signin from '../pages/Signin';

class Main extends Component {
    handleChange(prevState, nextState, replace, callback?) {
	console.log("made it");
	this.props.onRouteChange("it changed");
    }
    
    render() {
	return (
	<main>
	<Switch>
	<Route exact path="/" onChange={this.handleChange} component={() => (<Home title="Home" />)} />
	<Route path="/thoughts" onChange={this.handleChange} component={Thoughts} />
	<Route path="/travels" onChange={this.handleChange} component={Travels} />
	<Route path="/about" onChange={this.handleChange} component={About} />
	<Route path="/signin" onChange={this.handleChange} component={Signin} />
	</Switch>
	</main>
	);
    }
}

export default Main;
