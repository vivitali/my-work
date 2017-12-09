import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ icon }) => (
  <i className={`fa fa-${icon}`} aria-hidden="true" />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
