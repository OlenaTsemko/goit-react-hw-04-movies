import { NavLink } from 'react-router-dom';

import routes from 'routes';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.Navigation}>
    {routes.map(({ path, label, exact, showInNav }) =>
      showInNav ? (
        <NavLink
          key={path}
          exact={exact}
          to={path}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          {label}
        </NavLink>
      ) : null,
    )}

    {/* <NavLink
      exact
      to={routes.home}
      className={styles.NavLink}
      activeClassName={styles.NavLinkActive}
    >
      Home
    </NavLink>

    <NavLink
      exact
      to={routes.movies}
      className={styles.NavLink}
      activeClassName={styles.NavLinkActive}
    >
      Movies
    </NavLink> */}
  </nav>
);

export default Navigation;
