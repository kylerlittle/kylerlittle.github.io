import React, { Component } from 'react';
import Title from './Header/Title';
import Navbar from './Header/Navbar';
import { Jumbotron } from 'react-bootstrap';

// COVER PHOTOS from: https://googleplus-covers.com/fantasy-covers
import coverIm from './Header/assets/home.jpg';

class Header extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    title: "kylerlittle.github.io",
	    path: "/",
	    coverIm: "./Header/assets/home.jpg"
	}
    }
    
    onRouteChange(newPath) {
	console.log("New path: " + newPath);
	this.setState({
	    title: this.state.title,
	    path: newPath
	});
    }

    render() {
	var jumbotronStyle = {
	    height: '350px',
	    marginBottom: '0px',
	    paddingTop: '5px',
	    paddingBottom: '0px',
	    background: `url(${coverIm})`,
	    backgroundSize: 'cover',
	    color: 'white',
	    textShadow: '#444 0 5px 5px'
	};
	return (
		<header>
		<Jumbotron style={jumbotronStyle}>
		<Title title={this.state.title} path={this.state.path} />
		</Jumbotron>
		<Navbar onRouteChange={this.onRouteChange.bind(this)} />
		</header>
	);
    }
}

export default Header;
