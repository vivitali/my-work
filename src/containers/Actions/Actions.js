import React from 'react';
import './actions.scss';
import { Card } from '../../compoents/Card/Card';

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
    <div className="d-md-flex justify-content-md-center flex-md-wrap mt-5">
      {actions.map((item, i) => (
        <Card cardItem={item} key={`${item.id}_${i}`} />
      ))}
    </div>
  );
};
