import React, { Component } from 'react';

class Languages extends Component {
    render() {
	return (
		<div id="languages-page" className="transition-item">
		<h1>{this.props.displayName}</h1>
		<p>This is my languages page.</p>
		</div>
	);
    }
}

export default Languages;
