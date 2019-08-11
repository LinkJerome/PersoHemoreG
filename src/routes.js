import React from 'react';
import About from './layouts/About';
import Timeline from './layouts/Timeline';
import Portfolio from './layouts/Portfolio';
import Dashboard from './layouts/Dashboard';
import Personnal from './layouts/Personal';
// const About = React.lazy(() => import('./layouts/About'));
// const Timeline = React.lazy(() => import('./layouts/Timeline'));
// const Portfolio = React.lazy(() => import('./layouts/Portfolio'));
// const Dashboard = React.lazy(() => import('./layouts/Dashboard'));
// const Personnal = React.lazy(() => import('./layouts/Personnal'));


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
  },
  {
    path: '/personal',
    main: () => <Personnal  />
  }
];

export default routes;
