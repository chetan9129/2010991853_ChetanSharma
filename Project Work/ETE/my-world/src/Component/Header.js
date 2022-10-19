import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import index from "../Page/Dashboard/index";

import "../CSS/header.css";
import Add from "../Page/Dashboard/Add";

const Header = () => {
  return (
    <div className="header">
      <Navbar>
        {/* <Container> */}
        <Navbar.Collapse
          className="header_style header__heading"
          id="basic-navbar-nav"
        >
          {/* <Nav className="me-auto "> */}
          <Nav>
            <Link to="/">
              <img src="./Doccure.png" alt="" className="myWorldLogo" />
            </Link>
          </Nav>
          <Nav>
            <p>
              <Link
                to="/"
                style={{
                  color: "gold",
                  fontSize: "25px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </p>
          </Nav>
          <Nav>
            <p>
              <Link
                to="/about"
                style={{
                  color: "gold",
                  fontSize: "25px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                About
              </Link>
            </p>
          </Nav>
          <Nav>
            <p>
              <Link
                to="/contact"
                style={{
                  color: "gold",
                  fontSize: "25px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </p>
          </Nav>

          <Nav>
            <p>
              <Link
                to="/form"
                style={{
                  color: "gold",
                  fontSize: "25px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Form
              </Link>
            </p>
          </Nav>
          <Nav>
            <p>
              <Link
                // to="/dashboard"
                to="/users/add"
                className="btn btn-warning"
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Add User
              </Link>
            </p>
          </Nav>

          {/* </Nav> */}
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Header;
