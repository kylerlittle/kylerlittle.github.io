import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import backgroundIm from './assets/dust_scratches.png';

class App extends Component {
    render() {
	var appStyle = {
		background: `url(${backgroundIm})`,
		height: '100%',
		width: '100%',
		position: 'fixed',
		overflow: 'auto',
	};
	return (
		<div className="App" style={appStyle}>
		<Header />
		<Main />
		<Footer />
		</div>
	);
    }
}

export default App;
