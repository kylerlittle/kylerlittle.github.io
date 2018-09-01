import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Thoughts from './pages/Thoughts';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Languages from './pages/Languages';
import './styles/Main.css';
// import PageTransition from 'react-router-page-transition';

class Main extends Component {
    render() {
	return (
		<div className="page-wrap">
		<Switch>
		<Route exact path="/" component={() => (<Home displayName="HOME" />)} />
		<Route path="/thoughts" component={() => (<Thoughts displayName="THOUGHTS" />)} />
		<Route path="/projects" component={() => (<Projects displayName="PROJECTS" />)} />
		<Route path="/experience" component={() => (<Experience displayName="WORK EXPERIENCE" />)} />
		<Route path="/languages" component={() => (<Languages displayName="PROGRAMMING LANGUAGES" />)} />
		<Redirect from="*" to="/" />
		</Switch>
	</div>
	);
    }
}

export default Main;
