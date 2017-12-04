// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to={'/'}>
        My work
      </Link>
    </nav>
  );
};
