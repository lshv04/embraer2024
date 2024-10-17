import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/embraer-logo.png"; 
import "./Navbar.css"; 
import Sticker from "./Sticker";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" id="navcolor" className="fixed-top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
          <img
            src={logo}
            alt="Embraer Logo"
            width="150"
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          id="custom-toggler"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          {/* Substituindo o ícone SVG padrão por um ícone do Bootstrap */}
          <i
            className="bi bi-list"
            style={{ fontSize: "2rem", color: "#fff" }}
          ></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setExpanded(false)} // Fecha a navbar ao clicar
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setExpanded(false)} // Fecha a navbar ao clicar
            >
              Sobre mim
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/culture-pillar"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setExpanded(false)} // Fecha a navbar ao clicar
            >
              Pilar Cultural
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/extra"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setExpanded(false)} // Fecha a navbar ao clicar
            >
              Extra
            </Nav.Link>
          </Nav>
          <Sticker />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
