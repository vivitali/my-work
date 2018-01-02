import { takeLatest, put } from 'redux-saga/effects';
import {
  LOAD_USERS_PENDING,
  loadUsersFailure,
  loadUsersSuccess,
} from './reducer';
import users from '../../json/users';

export function* loadUsers() {
  try {
    const usersEnpoint = 'get/users/endpoint';
    yield put(loadUsersSuccess({ users }));
  } catch (err) {
    yield put(loadUsersFailure(err));
  }
}
export default function* usersData() {
  yield takeLatest(LOAD_USERS_PENDING, loadUsers);
}
