import React from 'react';
import About from "./layouts/About";
import Timeline from "./layouts/Timeline";
import Portfolio from './layouts/Portfolio';
import Dashboard from './layouts/Dashboard';


const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Dashboard/>
  },
  {
    path: '/about',
    main: () => <About/>
  },
  {
    path: '/timeline',
    main: () => <Timeline/>
  },
  {
    path: '/portfolio',
    main: () => <Portfolio  />
  }
];

export default routes;
