import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/project-data';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: data[this.props.match.params.id],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let mobile = document.querySelector('.nav-mobile');
    let tablet = document.querySelector('.nav-tablet-dropdown');

    mobile.style.display = 'none';
    tablet.style.display = 'none';
  }

  render() {
    console.log(this.state.project.image);
    const tech = this.state.project.tech.map((t, i) => {
      return (
        <p className="project-tech-item" key={i}>
          {t}
        </p>
      );
    });

    return (
      <div className="project-page">
        <Link className="breadcrumb" to="/">
          <i className="fa fa-2x fa-long-arrow-left" />
        </Link>
        <div className="project-name">{this.state.project.name}</div>
        <img
          className="project-image"
          src={require(`./../images/${this.state.project.image}`)}
        />
        <div className="project-blurb">{this.state.project.blurb}</div>
        <a className="project-link" href={this.state.project.githubLink}>
          Check out the code in GitHub
        </a>
        {this.state.project.liveLink ? (
          <a className="project-link" href={this.state.project.liveLink}>
            Visit the live project
          </a>
        ) : (
          ''
        )}
        <div className="project-tech">{tech}</div>
      </div>
    );
  }
}
