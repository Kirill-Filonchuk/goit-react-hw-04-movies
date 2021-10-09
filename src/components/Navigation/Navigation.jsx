import { NavLink, useLocation } from 'react-router-dom';
import s from './Navigation.module.css';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className={s.nav}>
       <NavLink
        className={s.navLink} activeClassName={s.navLinkActive}
        exact
        to={{ pathname: '/', state: { from: location } }}>
            Home
        </NavLink> 
          <NavLink
          className={s.navLink} activeClassName={s.navLinkActive}
        to={{ pathname: '/movies', state: { from: location ?? '/' } }}>
            Movies
        </NavLink>
  </nav>
  );
}
