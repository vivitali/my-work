import React from 'react';
import { Icon } from '../../compoents/Icon/Icon';
import './actionCard.scss';
import { Link } from 'react-router-dom';

export const ActionCard = ({ action }) => (
  <div className="action-card">
    <Link to={action.link}>
      <div className="img">
        <Icon icon={action.img} />
      </div>
    </Link>
    <span className="button">
      <Icon icon="plus" />
    </span>
    <Link to={action.link}>
      <div className="header">{action.header}</div>
    </Link>
  </div>
);
