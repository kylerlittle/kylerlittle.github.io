import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.toggleResponsive = this.toggleResponsive.bind(this);
	}
    componentWillMount() {
	// Read more here: https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
	this.props.history.listen(() => {
	    this.props.onRouteChange(this.props.history.location.pathname);
	});
    }
    componentWillUnmount() {
	this.props.history.unlisten();
	}
	toggleResponsive() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}
    render() {
	return (
		<nav>
		<ul className="topnav" id="myTopnav">
		<li><Link to="/"> Home </Link></li>
		<li><Link to="/projects"> Projects </Link></li>
		<li><Link to="/languages"> Languages </Link></li>
		<li><Link to="/experience"> Experience </Link></li>
		<li className="active"><Link to="/thoughts"> Thoughts </Link></li>
		<li className="icon" onClick={this.toggleResponsive}><i className="fa fa-bars"></i></li>
		</ul>
		</nav>
	);
    }
}

export default withRouter(Navbar);
