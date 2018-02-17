import { takeLatest, put } from 'redux-saga/effects';
import {
  LOAD_SCHEDULE_PENDING,
  loadScheduleFailure,
  loadScheduleSuccess,
} from './reducer';
import users from '../../json/users';

export function* loadUsers() {
  try {
    const usersEnpoint = 'get/users/endpoint';
    yield put(loadScheduleSuccess({ users }));
  } catch (err) {
    yield put(loadScheduleFailure(err));
  }
}
export default function* usersData() {
  yield takeLatest(LOAD_SCHEDULE_PENDING, loadUsers);
}
