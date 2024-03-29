import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { Navbar,Dropdown , Nav, Container, NavDropdown } from 'react-bootstrap';

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
      <Navbar.Brand as={Link} to="/">Lydio gestion des commandes  </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        {isLoggedIn && (  <NavDropdown title="Commandes à expédiés" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/pas-traitees" >Pas traitées</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/injoignables" >Injoignables</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/reservations" >Reservations</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/confirmees" >Confirmées</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/annulees" >Annulées</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/toute-les-commandes" >Toutes les commandes</NavDropdown.Item>
        </NavDropdown>
        )}
        </Nav>

        <Nav>
        {isLoggedIn && ( <NavDropdown title="Commandes expédiés" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/en-cours-de-livraison" >En cours de livraison</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/livrees" >Livrées</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/retours" >Retours</NavDropdown.Item>
        </NavDropdown>)}
        
         <LinkContainer to="/livreurs">
            <Nav.Link className={navData => navData.isActive ? classes.active : '' }> Livreurs </Nav.Link>
         </LinkContainer>
          {isLoggedIn && (<Dropdown>
  
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Profile <BsFillPersonLinesFill />
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
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
