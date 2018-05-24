import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    componentWillMount() {
	//Read more here: https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
	this.props.history.listen(() => {
	    console.log('The new path is: ', this.props.history.location.pathname);
	});
    }
    render() {
	return (
		<nav>
		<ul>
		<li style={{float: "left"}}><Link to="/"> Home </Link></li>
		<li style={{float: "left"}}><Link to="/thoughts"> Thoughts </Link></li>
		<li style={{float: "left"}}><Link to="/travels"> Travels </Link></li>
		<li style={{float: "left"}}><Link to="/about"> About </Link></li>
		<li style={{float: "right"}} className="active"><Link to="/signin"> Sign In </Link></li>
		</ul>
		</nav>
	);
    }
}

export default withRouter(Navbar);
