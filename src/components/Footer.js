import React, { Component } from 'react';
import './styles/Footer.css';

class Footer extends Component {
    render() {
	return (
		<div className="footer-wrap">
			<ul>
			<li><a href="https://linkedin.com/in/kylerlittle" class="fa fa-linkedin"></a></li>
			<li><a href="https://github.com/kylerlittle" class="fa fa-github"></a></li>
			<li><a href="https://twitter.com/kyler__little" class="fa fa-twitter"></a></li>
			<li><a href="https://www.instagram.com/kylerlittle/" class="fa fa-instagram"></a></li>
			<li><a href="https://www.facebook.com/klittlesir" class="fa fa-facebook"></a></li>
			</ul>
		</div>
	);
    }
}

export default Footer;
