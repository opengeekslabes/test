import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import { loginFBFailure } from '../../actions/autorisation/LogInFB'
import rsf from '../../../rsf/rsf'

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export function* loginFacebookSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, facebookProvider)
  } catch (error) {
    yield put(loginFBFailure(error))
  }
}


