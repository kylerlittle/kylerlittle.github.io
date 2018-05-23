import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

/*const _contact_info = {
    name: 'Kyler Little',
    email: 'mailto:kyler.j.little@gmail.com',
    phone: '2088194684'
}*/

class App extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    welcome_message: 'Welcome to ' + window.location.href + '!'
	};
    }
    routeChange(nextRoute) {
	console.log(nextRoute);
	this.setState({
	    welcome_message: 'You\'ve arrived at my ' + nextRoute + 'page.'
	});
    }
    render() {
	return (
		<div className="App">
		<Header title={this.state.welcome_message} />
		<Main onRouteChange={this.routeChange.bind(this)} />
		<Footer />
		</div>
	);
    }
}

export default App;
