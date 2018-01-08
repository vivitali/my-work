import { takeLatest, put } from 'redux-saga/effects';
import branch from '../../json/branch.json';
import {
  LOAD_BRANCH_PENDING,
  loadBranchFailure,
  loadBranchSuccess,
} from './reducer';

export function* loadApp() {
  try {
    yield put(loadBranchSuccess({ data: branch }));
  } catch (error) {
    yield put(loadBranchFailure({ error }));
  }
}
export default function* appData() {
  yield takeLatest(LOAD_BRANCH_PENDING, loadApp);
}
