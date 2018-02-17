/**
 * Users selectors
 */

import { createSelector } from 'reselect';

const selectUsers = state => state && state.get('schedule');

const makeSelectUsers = () =>
  createSelector(selectUsers, schedule => {
    return schedule.get('schedule');
  });

export { selectUsers, makeSelectUsers };
