import React, { Component } from 'react';
import Title from './Header/Title';
import Navbar from './Header/Navbar';

class Header extends Component {
    render() {
	return (
		<header>
		<Title title={this.props.title}/>
		<Navbar />
		</header>
	);
    }
}

export default Header;
