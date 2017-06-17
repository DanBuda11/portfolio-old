import '../styles/main.scss';
import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';

export default class App extends Component {
	render() {
		console.log('hi');
		return (
			<div>
				<Header />
				<div>Hi</div>
				<Footer />
			</div>
		);
	}
}