import React from 'react';

export const Employee = ({ background, user }) => {
  const shortName = `${user.lname} ${user.fname
    .substring(0, 1)
    .toUpperCase()}.`;
  return <div style={{ backgroundColor: background }}>{shortName}</div>;
};
