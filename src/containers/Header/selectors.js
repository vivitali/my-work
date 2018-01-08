import { createSelector } from 'reselect';

export const selectGlobal = state => state && state.get('header');

export const makeSelectBranch = () =>
  createSelector(selectGlobal, headerState => headerState.get('branch'));
