import React, { Component } from 'react';
import './styles/Home.css';

class Home extends Component {
    render() {
	return (
		<div id="home-page" className="transition-item">
		<h1>{this.props.displayName}</h1>
		<p>My name is <b>Kyler Little</b>. Welcome to my personal website.</p>
		<img className="pic-of-me" src={require('./assets/myself.JPG')} alt="bald, young man, named Kyler Little, holding a three-toed sloth in the Amazon Jungle"/>
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
