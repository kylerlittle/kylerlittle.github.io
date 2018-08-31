import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles/Navbar.css';
import ResponsiveMenu from 'react-responsive-navbar';


class Navbar extends Component {
    componentWillMount() {
		// Read more here: https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
		this.props.history.listen(() => {
			// First, first onRouteChange event handler (passed in via props)
			this.props.onRouteChange(this.props.history.location.pathname);
			// If navbar is in small-mode & open, shut it since we just changed routes. 
		});
	}
    componentWillUnmount() {
		this.props.history.unlisten();
	}
    render() {
	return (
		<ResponsiveMenu
		menuOpenButton={<i id="menu-button" class="fa fa-bars"></i>}
        menuCloseButton={<i id="menu-button" class="fa fa-close"></i>}
        changeMenuOn="820px"	
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
		menu={
			<div id="nav-bar">
			<ul>
				<li class="nav-bar-item"><Link to="/"> Home </Link></li>
				<li class="nav-bar-item"><Link to="/projects"> Projects </Link></li>
				<li class="nav-bar-item"><Link to="/languages"> Languages </Link></li>
				<li class="nav-bar-item"><Link to="/experience"> Experience </Link></li>
				<li class="nav-bar-item"><Link to="/thoughts"> Thoughts </Link></li>
			</ul>
			</div>
		}
		/>
	);
    }
}

export default withRouter(Navbar);
