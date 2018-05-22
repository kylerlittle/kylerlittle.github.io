import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
	return (
		<nav>
		<ul>
		<li><Link to="/"> Home </Link></li>
		<li><Link to="/thoughts"> Thoughts </Link></li>
		<li><Link to="/travels"> Travels </Link></li>
		</ul>
		</nav>
	);
    }
}

export default Navbar;
