import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = ({ scrollToSection }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (section) => {
    scrollToSection(section);
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="custom-navbar" sticky="top">
      <Container fluid className="nav-container">

        <Navbar.Brand className="logo">AT</Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse>
          <Nav className="ms-auto nav-custom">
            <Nav.Link onClick={() => handleClick('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleClick('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleClick('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleClick('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;