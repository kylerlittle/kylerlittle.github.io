import React, { Component } from 'react';
import Background from './assets/home.jpg';

class HeroBanner extends Component {
    render() {
	//var Background = this.props.src;
	var heroImageStyle = { backgroundImage: `url(${Background})`,
			       height: '100%',
			       backgroundPosition: 'center',
			       backgroundRepeat: 'no-repeat',
			       backgroundSize: 'cover',
			       position: 'relative'
			       };
	return (
	<div style={ heroImageStyle }>
	<div className="hero-text">
	Default HeroBanner Title
	</div>
	</div>
	);
    }
}

export default HeroBanner;
