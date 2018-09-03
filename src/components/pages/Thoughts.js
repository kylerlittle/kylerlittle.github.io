import React, { Component } from 'react';

class Thoughts extends Component {
    render() {
	return (
		<div id="thoughts-page" className="transition-item">
		<h1>{this.props.displayName}</h1>
		<p>This is my thoughts page.</p>
		</div>
	);
    }
}

export default Thoughts;
