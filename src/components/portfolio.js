import React, { Component } from 'react';
import data from '../data/project-data';
import ProjectThumb from './project-thumb';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: data,
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;

    let mobile = document.querySelector('.nav-mobile');
    let tablet = document.querySelector('.nav-tablet-dropdown');

    mobile.style.display = 'none';
    tablet.style.display = 'none';
  }

  render() {
    const projects = this.state.projects.map((project, i) => {
      return (
        <ProjectThumb
          key={i}
          id={i}
          name={project.name}
          image={project.image}
          tech={project.tech}
        />
      );
    });

    return (
      <div className="portfolio">
        <div className="portfolio-title">
          <h2>Dan Buda</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="portfolio-bio">
          <img
            className="bio-pic"
            src={require(`./../images/dan.png`)}
            alt="Dan"
          />
          <p className="bio-blurb">
            An Austin-based web developer focused on front-end and full-stack
            JavaScript projects with a passion for design and accessibility. But
            mostly he just wants to build cool things he can use.
          </p>
        </div>
        <div className="projects-grid">{projects}</div>
      </div>
    );
  }
}
