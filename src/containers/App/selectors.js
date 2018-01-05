import { createSelector } from 'reselect';

export const selectGlobal = state => state && state.get('global');

 export const makeSelectBranch = () =>
  createSelector(selectGlobal, globalState => globalState.get('branch') )