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

// favicons should be working but not showing up in Chrome tab, dan.png not showing up in deployed site, accessibility audits once deployed (axe should be good to go)
