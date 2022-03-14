import { NavLink } from 'react-router-dom';

import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';



const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;

  // const logoutHandler = () => {
  //   authCtx.logout();
  //   // optional: redirect the user
  // };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My test app</div>
      <nav className={classes.nav}>
        <ul>
        {/* {isLoggedIn && ( */}
          <li>
            <NavLink to='/accueil' className={navData => navData.isActive ? classes.active : '' }>
              Page D'accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/pas-traitees' className={navData => navData.isActive ? classes.active : '' }>
              Pas traitees
            </NavLink>
          </li>
          <li>
            <NavLink to='/reservations' className={navData => navData.isActive ? classes.active : '' }>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to='/confirmees' className={navData => navData.isActive ? classes.active : '' }>
              Confirmées 
            </NavLink>
          </li>
          <li>
            <NavLink to='/injoignables' className={navData => navData.isActive ? classes.active : '' }>
              Injoignables
            </NavLink>
          </li>
        {/* )}   */}
        {/* {isLoggedIn && (
          <li>
            <NavLink to='/text' className={navData => navData.isActive ? classes.active : '' }>
              Text Page
            </NavLink>
          </li>
        )}  
        {isLoggedIn && (
          <li>
            <NavLink to='/addquote' className={navData => navData.isActive ? classes.active : '' }>
              Add Quote
            </NavLink>
          </li>
         )}  
        {isLoggedIn && (
          <li>
            <NavLink to='/quotes' className={navData => navData.isActive ? classes.active : '' }>
              Quote List
            </NavLink>
          </li>
        )}  
        {isLoggedIn && (
          <li>
            <NavLink to='/new-user' className={navData => navData.isActive ? classes.active : '' }>
              New User
            </NavLink>
          </li>
          )}
        {!isLoggedIn && (
          <li>
            <NavLink to='/login' className={navData => navData.isActive ? classes.active : '' }>
              Login
            </NavLink>
          </li>
        )}        
       {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
        )} */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
