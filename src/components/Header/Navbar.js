import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
	return (
		<div>
		<Link to="home"> Home </Link>
		<Link to="thoughts"> Thoughts </Link>
		<Link to="travels"> Travels </Link>
		</div>
	);
    }
}

export default Navbar;
