import React, { Component } from 'react';
import './styles/Title.css';

class Title extends Component {
    shouldComponentUpdate(nextProps, nextState) {
	return true;
    }
    render() {
	return (
		<h1>
		<div className="site-name">
		{this.props.title}
	    </div>
	    </h1>
	);
    }
}

export default Title;
