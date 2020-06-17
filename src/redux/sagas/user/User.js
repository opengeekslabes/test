import { call, put } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from '../actions/autorisation/Login'
import rsf from '../../rsf/rsf'

const user = rsf.auth().currentUser;
console.log(user)

function* getUser() {
  const firstTodo = yield call(rsf.database.read, 'users/1');
  yield put(gotTodo(firstTodo));
}


