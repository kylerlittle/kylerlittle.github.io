import React, { Component } from 'react';

class Experience extends Component {
    render() {
	return (
		<div className="experience">
		<h1>{this.props.displayName}</h1>
		<p>This is my work experience page.</p>
		</div>
	);
    }
}

export default Experience;
