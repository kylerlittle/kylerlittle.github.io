import React, { Component } from 'react';

class Title extends Component {
    shouldComponentUpdate(nextProps, nextState) {
	return true;
    }
    render() {
	return (
		<h1>{this.props.title}</h1>
	);
    }
}

export default Title;
