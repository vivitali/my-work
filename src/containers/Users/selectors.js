/**
 * Users selectors
 */

import { createSelector } from 'reselect';

const selectUsers = state => state && state.get('users');

const makeSelectUsers = () =>
  createSelector(selectUsers, usersState => usersState.get('users'));

export { selectUsers, makeSelectUsers };
