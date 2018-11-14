import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social-links">
          <a
            target="_blank"
            href="https://twitter.com/danielbuda"
            className="footer-link-social"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <i className="fa fa-3x fa-twitter-square" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://codepen.io/danbuda/"
            className="footer-link-social"
            aria-label="Codepen"
            rel="noopener noreferrer"
          >
            <i className="fa fa-3x fa-codepen" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://github.com/danbuda11"
            className="footer-link-social"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <i className="fa fa-3x fa-github-square" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/danbuda/"
            className="footer-link-social"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <i className="fa fa-3x fa-linkedin-square" aria-hidden="true" />
          </a>
        </div>
        <div className="footer-contact">
          <a href="mailto:danbuda@gmail.com" className="footer-contact-link">
            danbuda@gmail.com
          </a>
        </div>
      </div>
    );
  }
}
