import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { Navbar,Dropdown , Nav, Container } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap'

import { Link } from 'react-router-dom';

import{ BsFillPersonLinesFill }from'react-icons/bs'; 




const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  // const text = {
  //   color: 'red',
  // };

  return (
    <div className={classes.header}>
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark" fixed="top">
    <Container sticky="top" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">Lydio gestion des commandes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        {isLoggedIn && ( <LinkContainer to="/pas-traitees">
          <Nav.Link className={navData => navData.isActive ? classes.active : '' }> Pas traitées </Nav.Link>
        </LinkContainer> )}
        {isLoggedIn && ( <LinkContainer to="/injoignables">
          <Nav.Link className={navData => navData.isActive ? classes.active : '' }> Injoignables </Nav.Link>
        </LinkContainer>)}
        {isLoggedIn && ( <LinkContainer to="/reservations">
          <Nav.Link className={navData => navData.isActive ? classes.active : '' }> Réservations </Nav.Link>
        </LinkContainer>)}
        {isLoggedIn && ( <LinkContainer to="/confirmees">
          <Nav.Link className={navData => navData.isActive ? classes.active : '' }> Confirmées </Nav.Link>
        </LinkContainer>)}
        </Nav>
        <Nav>
        {isLoggedIn && ( <LinkContainer to="/en-cours-de-livraison">
            <Nav.Link className={navData => navData.isActive ? classes.active : '' }> En cours de livraison </Nav.Link>
          </LinkContainer>)}
          {isLoggedIn && ( <LinkContainer to="/livrees">
            <Nav.Link className={navData => navData.isActive ? classes.active : '' }> Livrées </Nav.Link>
          </LinkContainer>)}
  
          {isLoggedIn && (<Dropdown>
  
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Profile <BsFillPersonLinesFill />
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
              {/* <Dropdown.Item as={Link} to="/reservations">reserv</Dropdown.Item> */}
               <Dropdown.Item onClick={logoutHandler} >Se déconnecter</Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown> )}
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
    </div>
  
  );
};

export default MainNavigation;
