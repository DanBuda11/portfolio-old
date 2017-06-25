import React, { Component } from 'react';
import { connect } from 'react-redux';
import getProjects from '../actions/index';
import { bindActionCreators } from 'redux';

class Portfolio extends Component {
	componentWillMount() {
		console.log('didmount');
		this.props.fetchProjects();
	}

	renderProjects() {
		console.log('props: ', this.props);
		console.log('state: ', this.state);
		return this.props.projects.map((project, i) => {
			return (
				<ProjectThumb
					key={i}
					id={i}
					name={project.name}
					img={project.image}
					blurb={project.blurb}
					githubLink={project.githubLink}
					liveLink={project.liveLink}
					tech={project.tech}
				/>
			);
		});
	}

	render() {
		return (
			<div className="portfolio">
				<div className="portfolio-title">
					<h2>Dan Buda</h2>
					<h3>Web Developer</h3>
				</div>
				<div className="portfolio-bio">
					<img src="/src/images/dan.png" />
					<p>Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
				</div>
				{this.renderProjects()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.projects
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProjects: () => dispatch(getProjects())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);