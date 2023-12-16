/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>COLOURETTE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/generate">
              <Nav.Link>Generate</Nav.Link>
            </Link>
            <Link passHref href="/palette/view">
              <Nav.Link>Palettes</Nav.Link>
            </Link>
            <Link passHref href="/projects/view">
              <Nav.Link>Projects</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link passHref href="/profile">
          <Nav.Link className="mx-4">
            <Person color="white" size={24} />
          </Nav.Link>
        </Link>
        <Button variant="danger" onClick={signOut}>Sign Out</Button>
      </Container>
    </Navbar>
  );
}
