/**
 * Users selectors
 */

import { createSelector } from 'reselect';

const selectUsers = state => state && state.users;

const makeSelectUsers = () =>
  createSelector(selectUsers, usersState => usersState.users);

export { selectUsers, makeSelectUsers };
