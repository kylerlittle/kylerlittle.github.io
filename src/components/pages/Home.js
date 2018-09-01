import React, { Component } from 'react';
import './styles/Home.css';

class Home extends Component {
    render() {
	return (
		<div className="Home">
		<h1>{this.props.displayName}</h1>
		<p>My name is <b>Kyler Little</b>. Welcome to my personal website.</p>
		<img className="pic-of-me" src={require('./assets/myself.JPG')} alt="This is a picture of me holding a sloth in the Amazon Jungle."/>
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
