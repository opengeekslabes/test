import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import { loginGoogleFailure } from '../../actions/autorisation/LogInGoogle'
import rsf from '../../../rsf/rsf'

const authProvider = new firebase.auth.GoogleAuthProvider()

export function* loginGoogleSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider)
  } catch (error) {
    yield put(loginGoogleFailure(error))
  }
}
