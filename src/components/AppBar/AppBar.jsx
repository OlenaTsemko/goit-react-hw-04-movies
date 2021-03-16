import Navigation from 'components/Navigation';
import styles from './AppBar.module.scss';

const AppBar = () => (
  <header className={styles.AppBar}>
    <Navigation />
    <div className={styles.panel}></div>
  </header>
);

export default AppBar;
