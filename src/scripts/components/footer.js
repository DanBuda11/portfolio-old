import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footer-links">
					<a href="" className="footer-link-social"><i className="fa fa-twitter-square"></i></a>
					<a href="" className="footer-link-social"></a>
					<a href="" className="footer-link-social"></a>
					<a href="" className="footer-link-social"></a>
				</div>
				<div className="footer-contact">
					<a href="tel:+15126631673" className="footer-contact-link">512-663-1673</a>
					<a href="mailto:danbuda@gmail.com" className="footer-contact-link">danbuda@gmail.com</a>
				</div>
				<p className="copyright">&copy;{`${new Date().getFullYear()}`} Dan Buda</p>
			</div>
		);
	}
}