import React, { Component } from 'react';
import Title from './Header/Title';
import Navbar from './Header/Navbar';

class Header extends Component {
    render() {
	return (
		<header>
		<Navbar />
		<Title title={this.props.title} />
		</header>
	);
    }
}

export default Header;
