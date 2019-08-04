import React from 'react';
const About = React.lazy(() => import('./layouts/About'));
const Timeline = React.lazy(() => import('./layouts/Timeline'));
const Portfolio = React.lazy(() => import('./layouts/Portfolio'));
const Dashboard = React.lazy(() => import('./layouts/Dashboard'));


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
