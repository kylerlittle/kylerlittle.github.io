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
			oldPath: "/home",
			currentPath: "/home",
			coverIm: "./assets/home.jpg"
		}
    }
    
    onRouteChange(newPath) {
			// HACK: onRouteChange, click button to close. If other buttons exist in DOM with 'role="button"', this will fail.
			// Eventually, fix this.
			var buttons = document.querySelectorAll('[role="button"]');
			if (buttons.length !== 0) buttons[0].click();

			this.setState({
				...this.state,
				oldPath: this.state.currentPath,
				currentPath: newPath
			});
		}
		
		// Ya... so I forgot this is in Header.js... We probably want this to passed as a prop to each subpage.
		// 
		componentDidMount() {
			// Add appropriate transition class depending on location in array.
			var orderedRoutes = ['home', 'projects', 'languages', 'experience', 'thoughts'];
			var newRoute = this.state.currentPath.substring(1), oldRoute = this.state.oldPath.substring(1);
			var newElement = document.getElementById(`${newRoute}-page`);
			console.log("hi");
			// also need to remove fade class off other element.
			if (orderedRoutes.indexOf(oldRoute) < orderedRoutes.indexOf(newRoute)) {
				// newRoute is to right of oldRoute, so it should fade in from right
				
				newElement.className += "fade-right";
			} else if (orderedRoutes.indexOf(oldRoute) > orderedRoutes.indexOf(newRoute)) {
				newElement.className += "fade-left";
			}
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
