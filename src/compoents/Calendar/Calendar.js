import React from 'react';
import './calendar.scss';
import moment from 'moment';
import { DayCell } from './DayCell';

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
    const calendar = this.createCalendarArr();

    return (
      <div>
        <aside className="calendar-aside" />
        <div className="calendar">
          <dl className="calendar-title">
            {this.getWeekDDays().map((item, i) => (
              <dt key={`day-name_${i}`}>{item}</dt>
            ))}
          </dl>
          <section className="calendar-main">
            {calendar.map((item, i) => (
              <DayCell key={`day_${i}`} day={item.format('D')} />
            ))}
          </section>
        </div>
      </div>
    );
  }
}
