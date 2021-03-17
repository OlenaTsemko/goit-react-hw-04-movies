import { lazy } from 'react';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    showInNav: true,
  },
  {
    path: '/movies',
    label: 'Movies',
    component: MoviesPage,
    exact: true,
    showInNav: true,
  },
  {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
  },
];

// const routes = {
//   home: '/',
//   movies: '/movies',
//   movieDetailsPage: '/movies/:movieId',
// };

export default routes;
