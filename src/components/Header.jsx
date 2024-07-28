import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./Header.modules.css";
import { DashboardContext } from "../store/Favourites/context";

function Header() {
  const {state: dashboardState} = useContext(DashboardContext);

  return (
    <header className="mb-4">
      <Navbar className={styles.navbar} bg="transparent">
        <Navbar.Brand as={Link} to="/">
          Chef Up!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-2">
            <Nav.Link as={Link} to="/favourites">
              Favourites {`(${dashboardState.recipes.length})`}
            </Nav.Link>

            <Nav.Link as={Link} to="/grocery-list">
              Grocery List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
