import React from 'react';
import navlogo from "../Navbar/logo_react.png";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

function Navbar_Main() {
  let history = useHistory();

  const logout = () => {
    console.log("logout triggered")
    localStorage.removeItem("token")
    return history.push("/");
}

  return (
    <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={navlogo} width="40px" alt="logos" height="40px" />{' '}
          REACT
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/user">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/link_1">About Us</Nav.Link>
            <Nav.Link as={Link} to="/user">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/user">My Diary</Nav.Link>
            <NavDropdown title="Products">
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item as={Link} to="/" onClick={logout}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navbar_Main;