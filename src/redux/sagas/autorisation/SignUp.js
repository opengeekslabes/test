import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import { signupFailure } from '../../actions/autorisation/SignUp'
import { loginSuccess } from '../../actions/autorisation/Login'
import rsf from '../../../rsf/rsf'
import { userName } from '../../actions/user/Username'
import { userReducer } from '../../reducers/user/Username'

export function* createUserSaga({email, password, name}) {
  console.log(name)
  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password)
    console.log(name)
    yield put(loginSuccess(user));

  } catch(error) {
    yield put(signupFailure(error));
  }
}
