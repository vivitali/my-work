import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../compoents/Icon/Icon';
import './header.scss';

const menuItems = [];

export const Header = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          My work
        </Link>
        <ul />
        <button className="navbar-toggler navbar-toggler-right" type="button">
          <span>Username</span> <Icon icon="sign-out" />
        </button>
      </div>
    </nav>
  );
};
