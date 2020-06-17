import { call, put } from 'redux-saga/effects'
import { signupSuccess, signupFailure } from '../../actions/autorisation/SignUp'
import rsf from '../../../rsf/rsf'
import { types } from '../../actions/user/Username'

export function* createUserSaga({email, password, name}) {
  console.log(name)
  yield put({type: types.USER.NAME, name: name });
  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    yield put(signupSuccess(name));
  }
  catch(error) {
    yield put(signupFailure(error));
  }
}
export function* addUser({name}) {
  try {
    const key = yield call(rsf.database.create, 'users', {
      username: name
  })
  }
  catch(error) {
    yield put(signupFailure(error));
  }
};