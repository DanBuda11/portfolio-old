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
				<p>Dan has dabbled with code since middle school in the early 90s, initially learning BASIC and making games and quizzes for his friends. He later taught himself HTML and CSS when they were they were the cool new things and has been passionate about making things ever since. He primarily works with JavaScript in both the front and back end but enjoys the challenge of continuing to learn new skills.</p>
				<p>Outside of a love of all things coding, Dan currently holds his real estate license and owns and manages his own investment property. Prior to all that fun stuff, he worked for six years at the Texas Capitol, ultimately serving as Chief of Staff to State Senator Wendy Davis. Dan was a candidate for Austin City Council in 2014.</p>
				<p>Dan loves to travel and scuba dive with his wife Susie and has lived overseas in both Germany and China. He occasionally plays guitar, bass and piano (and is still a bit sore his mom sold his saxophone after high school).</p>
				<p>A lifelong soccer player, Dan has also recently coached youth soccer. He also enjoys tennis, golf and hitting the gym (albeit not in a “bro” kinda way).</p>
			</div>
		);
	}
}