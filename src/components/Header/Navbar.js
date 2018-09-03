import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles/Navbar.css';
import ResponsiveMenu from 'react-responsive-navbar';


class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSmallMenuOpen: false,
			routeChanged: false,
		};
	}
    componentWillMount() {
		// Read more here: https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
		this.props.history.listen(() => {
			// onRouteChange event handler (passed in via props)
			this.props.onRouteChange(this.props.history.location.pathname);
		});
	}
    componentWillUnmount() {
		this.props.history.unlisten();
	}
    render() {
	return (
		<ResponsiveMenu
		menuOpenButton={<i id="menu-button" className="fa fa-bars"></i>}
        menuCloseButton={<i id="menu-button" className="fa fa-close"></i>}
        changeMenuOn="820px"	
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
		menu={
			<div id="nav-bar">
			<ul>
				<li className="nav-bar-item"><Link to="/home"> Home </Link></li>
				<li className="nav-bar-item"><Link to="/projects"> Projects </Link></li>
				<li className="nav-bar-item"><Link to="/languages"> Languages </Link></li>
				<li className="nav-bar-item"><Link to="/experience"> Experience </Link></li>
				<li className="nav-bar-item"><Link to="/thoughts"> Thoughts </Link></li>
			</ul>
			</div>
		}
		/>
	);
    }
}

export default withRouter(Navbar);
