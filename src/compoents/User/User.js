import React from 'react';
import { Icon } from '../../compoents/Icon/Icon';
import './user.scss';
import { Link } from 'react-router-dom';

export const User = ({ cardItem }) => (
  <div className="user-card">
    <Link to={`users/${cardItem.id}`}>
      <div className="img">
        <Icon icon={cardItem.img} />
      </div>
    </Link>
    <span className="button">
      <Icon icon="pencil" />
    </span>
    <Link to={`users/${cardItem.id}`}>
      <div className="header">
        <div className="name">{`${cardItem.fname} ${cardItem.lname}`}</div>
        <div className="position">{cardItem.position}</div>
      </div>
    </Link>
  </div>
);
