import { takeLatest, put } from 'redux-saga/effects';
import {
  LOAD_ALTERS_PENDING,
  loadAltersFailure,
  loadAltersSuccess,
} from './reducer';
import alters from '../../json/alter.json';

export function* loadUsers() {
  try {
    const altersEnpoint = 'example/alters/endpoint';
    yield put(loadAltersSuccess({ data: alters }));
  } catch (err) {
    yield put(loadAltersFailure(err));
  }
}
export default function* usersData() {
  yield takeLatest(LOAD_ALTERS_PENDING, loadUsers);
}
