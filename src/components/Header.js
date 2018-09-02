import React, { Component } from 'react';
import Title from './Header/Title';
import Navbar from './Header/Navbar';
import { Jumbotron } from 'react-bootstrap';
import './styles/Header.css';

class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {
			title: "kylerlittle.github.io",
			path: "/",
			coverIm: "./assets/home.jpg"
		}
    }
    
    onRouteChange(newPath) {
			// HACK: onRouteChange, click button to close. If other buttons exist in DOM with 'role="button"', this will fail.
			// Eventually, fix this.
			var buttons = document.querySelectorAll('[role="button"]');
			if (buttons.length !== 0) buttons[0].click();
			this.setState({
				title: this.state.title,
				path: newPath
			});
    }

    render() {
		return (
			<header>
			<Jumbotron>
			<Title title={this.state.title} path={this.state.path} />
			</Jumbotron>
			<Navbar onRouteChange={this.onRouteChange.bind(this)} />
			</header>
		);
    }
}

export default Header;
