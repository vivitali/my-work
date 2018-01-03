import React from 'react';
import { Icon } from '../../compoents/Icon/Icon';
import './alter.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const Alter = ({ alterItem }) => {
  moment.locale('uk');
  const parseTime = time => moment(time, 'HH:mm:ss');
  const formattedDiff = (end, start) =>
    moment.duration(parseTime(end).diff(parseTime(start))).humanize();

  return (
    <div className="alter-card">
      <Link to={`alters/${alterItem.id}`}>
        <div className="alter-block">
          <div>
            <span className="title">Початок зміни</span> <Icon icon="clock-o" />
            <span className="value">
              {parseTime(alterItem.startTime).format('HH:mm')}
            </span>
          </div>
          <div>
            <span className="title">Кінець зміни</span>{' '}
            <Icon className="my-icon" icon="clock-o" />
            <span className="value">
              {parseTime(alterItem.endTime).format('HH:mm')}
            </span>
          </div>
          <div>
            <span className="title">Тривалість</span>{' '}
            <span className="value">
              {formattedDiff(alterItem.endTime, alterItem.startTime)}
            </span>
          </div>
        </div>
      </Link>
      <span className="button">
        <Icon icon="pencil" />
      </span>
      <Link to={`alter/${alterItem.id}`}>
        <div className="header">
          <div className="name">{alterItem.name}</div>
        </div>
      </Link>
    </div>
  );
};
