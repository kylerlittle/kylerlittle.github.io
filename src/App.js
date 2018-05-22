import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

/*const _contact_info = {
    name: 'Kyler Little',
    email: 'mailto:kyler.j.little@gmail.com',
    phone: '2088194684'
}*/

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
		<Footer />
		</div>
	);
    }
}

export default App;
