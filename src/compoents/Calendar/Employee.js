import React from 'react';

export const Employee = ({ styles, user }) => {
  const shortName = `${user.lname} ${user.fname
    .substring(0, 1)
    .toUpperCase()}.`;
  return <div style={styles}>{shortName}</div>;
};
