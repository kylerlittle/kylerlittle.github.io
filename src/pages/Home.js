import React, { Component } from 'react';

class Home extends Component {
    render() {
	return (
		<div className="Home">
		<h1>{this.props.title}</h1>
		<p>This is my home page.</p>
		</div>
	);
    }
}

export default Home;
