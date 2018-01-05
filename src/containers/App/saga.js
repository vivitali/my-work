import { takeLatest, put } from 'redux-saga/effects';
import alters from '../../json/alter.json';
import {
  LOAD_MY_WORK_PENDING,
  loadMyWorkFailure,
  loadMyWorkSuccess,
} from '../../reducers/loadApp';

export function* loadApp() {
  try {
    yield put(loadMyWorkSuccess({ data: alters }));
  } catch (error) {
    yield put(loadMyWorkFailure({ error }));
  }
}
export default function* usersData() {
  yield takeLatest(LOAD_MY_WORK_PENDING, loadApp);
}
