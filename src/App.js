import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
import routes from 'routes';

import MyLoader from 'components/Loader';

// const HomePage = lazy(() =>
//   import('pages/HomePage' /* webpackChunkName: "HomePage" */),
// );
// const MoviesPage = lazy(() =>
//   import('pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
// );
// const MovieDetailsPage = lazy(() =>
//   import('pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
// );

const App = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={<MyLoader />}>
          <Switch>
            {routes.map(({ path, exact, component: Component }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={Component}
              />
            ))}

            {/* <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} /> */}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
