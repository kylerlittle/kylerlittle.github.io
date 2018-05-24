import React, { Component } from 'react';
import './Title.css';

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
		<div className="page-name">
		{this.props.path}
	    </div>
	    </h1>
	);
    }
}

export default Title;
