import { call, put } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from '../../actions/autorisation/Login'
import { types } from '../../actions/autorisation/Types'
import { typesUser } from '../../actions/user/Username'
import rsf from '../../../rsf/rsf'

export function* loginSaga({email, password}) {
  yield put({type: types.LOGIN.REQUEST})
  try {
    const user = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(loginSuccess(user));
  }
  catch(error) {
    yield put(loginFailure(error));
  }
}
