import { Route, Switch, Redirect } from 'react-router-dom';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

import routes from 'routes';

import 'App.scss';

const App = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route>
            <Redirect to={routes.home} />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
