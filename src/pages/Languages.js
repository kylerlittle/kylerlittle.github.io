import React, { Component } from 'react';

class Languages extends Component {
    render() {
	return (
		<div className="languages">
		<h1>{this.props.displayName}</h1>
		<p>This is my languages page.</p>
		</div>
	);
    }
}

export default Languages;
