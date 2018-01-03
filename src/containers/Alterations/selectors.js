/**
 * Alters selectors
 */

import { createSelector } from 'reselect';

export const selectUsers = state => state && state.get('alters');

export const makeSelectAlters = () =>
  createSelector(selectUsers, altersState => altersState.get('data'));
