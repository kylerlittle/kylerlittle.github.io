import React, { Component } from 'react';
import Title from './Header/Title';
import Navbar from './Header/Navbar';

class Header extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    title: "Welcome to " + window.location.href + "!"
	}
    }
    
    onRouteChange(newPath) {
	console.log("New path: " + newPath);
	this.setState({
	    title: "You've arrived at " + window.location.href + "!"
	});
    }
    
    render() {
	return (
		<header>
		<Title title={this.state.title}/>
		<Navbar onRouteChange={this.onRouteChange.bind(this)} />
		</header>
	);
    }
}

export default Header;
