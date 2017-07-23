import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
	componentDidMount() {
		document.body.scrollTop = 0;
		
		let mobile = document.querySelector('.nav-mobile');
		let tablet = document.querySelector('.nav-tablet-dropdown');
		
		mobile.style.display = 'none';
		tablet.style.display = 'none';
	}

	render() {
		return (
			<div className="about">
				<Link className="breadcrumb" to="/"><i className="fa fa-2x fa-long-arrow-left"></i></Link>
				<p>Dan has been meddling in coding since middle school in the early 90s, initially learning BASIC and making games and quizzes for his friends. He eventually taught himself HTML and CSS when they arrived on the scene and has been passionite about making things ever since.</p>
				<p>Outside of a love of all things coding, Dan has spent time in financial services, real estate and politics. He currently hold his real estate license and help clients buy and sell homes and investment property. He has also owned and maneged his own investment property since 2009. Prior to real estate, Dan spent six years working at the Texas Capitol, ultimately serving as Chief of Staff to State Senator Wendy Davis. Dan ran for a spot on Austin City Council in 2014.</p>
				<p>Outside of coding and professional aspirations, Dan loves to travel, and has lived in Germany and China. He loves to scuba dive with his wife, Susie.</p>
				<p>Music has also been a hobby for years. Piano lessons started as a child and continued thru high school when he decided to pick up the guitar and bass.</p>
				<p>Dan also loves sports, with favorites being soccer, tennis and golf.</p>
			</div>
		);
	}
}