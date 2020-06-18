import { call, put } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from '../../actions/autorisation/Login'
import { types } from '../../actions/autorisation/Types'
import { typesUser } from '../../actions/user/Username'
import rsf from '../../../rsf/rsf'

export function* loginSaga({ email, password }) {
  yield put({ type: types.LOGIN.REQUEST })
  try {
    const user = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    console.log('user', user.user.email)
    const a = { ...user, user: { ...user.user, displayName: 'godHelpUs' } }

    yield put(loginSuccess(user));
    yield put({ type: typesUser.USERNAME.REQUEST, email: email });

  }
  catch (error) {
    yield put(loginFailure(error));
  }
}
