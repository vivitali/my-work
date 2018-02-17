import React from 'react';
import './calendar.scss';
import moment from 'moment';
import { DayCell } from './DayCell';
import { Employee } from './Employee';

export class Calendar extends React.Component {
  createCalendarArr() {
    const startDay = moment()
      .startOf('month')
      .startOf('week');
    const endDay = moment()
      .endOf('month')
      .endOf('week');
    const length = endDay.diff(startDay, 'days') + 1;

    return Array(length)
      .fill(0)
      .map((n, i) => startDay.clone().add(n + i, 'day'));
  }

  getWeekDDays() {
    return Array(7)
      .fill(0)
      .map((n, i) =>
        moment()
          .isoWeekday(1)
          .clone()
          .add(n + i, 'day')
          .format('dd')
      );
  }

  render() {
    window.moment = moment; // debug purpose
    const { users } = this.props;
    const calendar = this.createCalendarArr();
    const rows = Math.ceil(calendar.length / 7);
    const LINE_HEIGHT = 24;
    const cellStyle = {
      paddingTop: `${LINE_HEIGHT}px`,
      height: `${
        users && users.length > 4 ? LINE_HEIGHT * (users.length + 1) + 1 : 125
      }px`,
      minHeight: '125px',
    };

    return (
      <div className="d-flex">
        <aside className="calendar-aside">
          {Array(rows)
            .fill(1)
            .map((el, i) => (
              <DayCell key={`day_${i}`} users={users} styles={cellStyle} />
            ))}
        </aside>
        <div className="calendar">
          <dl className="calendar-title">
            {this.getWeekDDays().map((item, i) => (
              <dt key={`day-name_${i}`}>{item}</dt>
            ))}
          </dl>
          <section className="calendar-main">
            {calendar.map((item, i) => (
              <DayCell
                key={`day_${i}`}
                day={item.format('D')}
                styles={cellStyle}
                users={users}
              />
            ))}
          </section>
        </div>
      </div>
    );
  }
}
