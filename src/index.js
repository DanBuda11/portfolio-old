import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('entry')
);

// favicons not working, accessibility audits once deployed (axe should be good to go)
