import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const _contact_info = {
    name: 'Kyler Little',
    email: 'mailto:kyler.j.little@gmail.com',
    phone: '2088194684'
}

class App extends Component {
    constructor() {
	super();
	this.state = {
	    welcome_message : 'Welcome to Kyler Little\'s blog!',
	};
    }
    render() {
	return (
		<div className="App">
		<Header title={this.state.welcome_message}/>
		<main>{this.props.children}</main>
		<ul>
		<li><Link to="home"> Home </Link></li>
		<li><Link to="thoughts"> Thoughts </Link></li>
		<li><Link to="travels"> Travels </Link></li>		
		</ul>
		<Footer />
		</div>
	);
    }
}

export default App;
