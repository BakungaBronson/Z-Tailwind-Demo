'use strict';

import { render } from 'z-js-framework';
import Home from './pages/home';
import Listing from './pages/listing';
import About from './pages/about';

const root = document.getElementById('root');

// define your routes here
const routes = [
  {
    route: '/',
    component: Home,
  },
  {
    route: '/about',
    component: About,
  },
  {
    route: '/listing',
    component: Listing,
  },
];

render(root, routes);
