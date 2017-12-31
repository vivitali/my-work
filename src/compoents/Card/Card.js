import React from 'react';
import { Icon } from '../../compoents/Icon/Icon';
import './card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ cardItem }) => (
  <div className="action-card">
    <Link to={cardItem.link}>
      <div className="img">
        <Icon icon={cardItem.img} />
      </div>
    </Link>
    <span className="button">
      <Icon icon="plus" />
    </span>
    <Link to={cardItem.link}>
      <div className="header">{cardItem.header}</div>
    </Link>
  </div>
);
