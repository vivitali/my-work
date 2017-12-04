import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavItem = ({ linkTo, text, isActive, isDisabled }) => {
  return (
    <li className={`nav-item ${isActive && 'active'}`}>
      <Link className={isDisabled && 'disabled'} to={linkTo}>
        {text}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
