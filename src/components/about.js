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
      <div className="about-container">
        <Link className="breadcrumb" to="/">
          <i className="fa fa-2x fa-long-arrow-left" />
        </Link>
        <div className="about">
          <p>
            Dan has dabbled with code since middle school in the early 90s,
            initially learning BASIC and making games and quizzes for his
            friends. He later taught himself HTML and CSS when they were they
            were the cool new things and has been passionate about making things
            ever since. He primarily works with JavaScript in both the front and
            back end but enjoys the challenge of continuing to learn new skills.
          </p>
          <p>
            Outside of a love of all things coding, Dan currently holds his real
            estate license and has owned and managed his own investment
            property. He has worked on-and-off at the Texas Capitol since 2007,
            currently serving as a Finance Policy Analyst for State Senator
            Royce West and was previously Chief of Staff to State Senator Wendy
            Davis. Dan was a candidate for Austin City Council in 2014.
          </p>
          <p>
            Dan loves to travel and scuba dive with his wife Susie and has lived
            overseas in both Germany and China. He occasionally plays guitar,
            bass and piano (and is still a bit sore that his mom sold his
            saxophone after high school).
          </p>
          <p>
            A lifelong soccer player, Dan was recently a youth soccer coach and
            earned a certification from the Positive Coaching Alliance. He also
            enjoys tennis, golf, running, and hitting the gym (albeit not in a
            “bro” kinda way).
          </p>
        </div>
      </div>
    );
  }
}
