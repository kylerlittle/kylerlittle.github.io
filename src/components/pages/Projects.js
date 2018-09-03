import React, { Component } from 'react';
import './styles/Projects.css'

class Projects extends Component {
    render() {
	return (
		<div id="projects-page" className="transition-item">
		<h1>{this.props.displayName}</h1>
		<p>This is my projects page.</p>
		<p>This is my projects page.</p>
		<p>This is my projects page.</p>
		<p>This is my projects page.</p>
		<p>This is my projects page.</p>
		</div>
	);
    }
}

export default Projects;
