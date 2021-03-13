import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NotFound from 'pages/NotFound';

import 'App.scss';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
