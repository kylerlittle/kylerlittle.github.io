import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Thoughts from '../pages/Thoughts';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Languages from '../pages/Languages';
import './styles/Main.css';

class Main extends Component {
    render() {
	return (
		<div className="page-wrap">
		<Switch>
		<Route exact path="/" component={() => (<Home displayName="Home" />)} />
		<Route path="/thoughts" component={() => (<Thoughts displayName="Thoughts" />)} />
		<Route path="/projects" component={() => (<Projects displayName="Projects" />)} />
		<Route path="/experience" component={() => (<Experience displayName="Work Experience" />)} />
		<Route path="/languages" component={() => (<Languages displayName="Programming Languages" />)} />
		<Redirect from="*" to="/" />
		</Switch>
	</div>
	);
    }
}

export default Main;
