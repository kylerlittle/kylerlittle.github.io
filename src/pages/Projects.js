import React, { Component } from 'react';

class Projects extends Component {
    render() {
	return (
		<div className="projects">
		<h1>{this.props.displayName}</h1>
		<p>This is my projects page.</p>
		</div>
	);
    }
}

export default Projects;
