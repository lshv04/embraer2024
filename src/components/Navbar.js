
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/embraer-logo.png"; 
import "./Navbar.css"; 
import Sticker from "./Sticker";

function MyNavbar() {
  return (
    <Navbar expand="lg" id="navcolor" className="fixed-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="Embraer Logo"
            width="150"
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler">
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
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sobre mim
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/culture-pillar"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Pilar Cultural
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/extra"
              className={({ isActive }) => (isActive ? "active" : "")}
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
