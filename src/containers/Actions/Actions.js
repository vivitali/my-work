import React from 'react';
import { Icon } from '../../compoents/Icon/Icon';
import './actions.scss';
import { ActionCard } from '../../compoents/ActionCard/ActionCard';

const actions = [
  {
    link: '/alterations',
    header: 'Типи змін',
    img: 'list-alt',
    actions: 'Add',
  },
  {
    link: '/users',
    header: 'Працівники',
    img: 'users',
    actions: 'Add',
  },
  {
    link: '/schedule',
    header: 'Розклад',
    img: 'calendar',
    actions: 'Add',
  },
];

export const Actions = () => {
  return (
    <div className="d-md-flex justify-content-md-center">
      {actions.map(item => <ActionCard action={item} />)}
    </div>
  );
};
