import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Thoughts from '../pages/Thoughts';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Languages from '../pages/Languages';

class Main extends Component {
    render() {
	return (
		<main>
	<Switch>
	<Route exact path="/" component={() => (<Home title="Home" />)} />
	<Route path="/thoughts" component={Thoughts} />
	<Route path="/projects" component={Projects} />
	<Route path="/experience" component={Experience} />
	<Route path="/languages" component={Languages} />
		</Switch>
	</main>
	);
    }
}

export default Main;
