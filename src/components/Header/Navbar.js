import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
	return (
		<nav>
		<ul>
		<li><a><Link to="/"> Home </Link></a></li>
		<li><a><Link to="/thoughts"> Thoughts </Link></a></li>
		<li><a><Link to="/travels"> Travels </Link></a></li>
		<li><a><Link to="/about"> About </Link></a></li>
		<li style={{float: "right"}}><a class="active"><Link to="/signin"> Sign In </Link></a></li>
		</ul>
		</nav>
	);
    }
}

export default Navbar;
