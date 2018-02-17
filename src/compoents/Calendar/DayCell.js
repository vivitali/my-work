import React from 'react';
import { Employee } from './Employee';

export const DayCell = ({ day, users, styles }) => {
  const getStyles = index => {
    return {
      backgroundColor: index % 2 ? 'rgba(218, 218, 218, 0.5)' : 'white',
      opacity: 1,
      textAlign: 'right',
    };
  };
  return (
    <div className="day-cell" style={styles}>
      <span className="day-cell-number">{day}</span>
      {users &&
        users.map((user, i) => (
          <Employee user={user} key={`day-name_${i}`} styles={getStyles(i)}>
            {user.lname}>
          </Employee>
        ))}
    </div>
  );
};
