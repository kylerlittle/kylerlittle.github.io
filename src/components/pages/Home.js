import React, { Component } from 'react';
import picOfMe from './assets/myself.JPG';
import './styles/Home.css';

class Home extends Component {
    render() {
		var imageStyle = {
			width: 'auto',
			height: '300px',
			maxWidth: '90%',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			borderRadius: '1em',
			margin: '0 auto',
			marginTop: '4em',
			transform: 'rotate(90deg)',
		}
	return (
		<div className="Home">
		<h1>{this.props.displayName}</h1>
		<p>My name is <b>Kyler Little</b>. Welcome to my personal website.</p>
		<img className="pic-of-me" src={require('./assets/myself.JPG')}/>
		<p>Testing text post-image. This should show up.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		<p>This is some text to make the page scrollable.</p>
		</div>
	);
    }
}

export default Home;
