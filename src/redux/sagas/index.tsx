import { all, call, fork, take, takeEvery } from 'redux-saga/effects'
import firebase from 'firebase'
import { types } from '../actions/autorisation/Types'
import rsf from '../../rsf/rsf'
import { history } from '../../components/App'
import { loginSaga } from './autorisation/Login'
import { loginGoogleSaga } from './autorisation/LogInGoogle'
import { createUserSaga, addUser } from './autorisation/SignUp'
import { logoutSaga } from './autorisation/Logout'
import { sendPasswordResetEmailSaga } from './autorisation/ResetPassword'
import { loginFacebookSaga } from './autorisation/LogInFB'


const user = firebase.auth().currentUser;

function* loginStatusWatcher() {
  const channel = yield call(rsf.auth.channel)
  while (true) {
    const { user } = yield take(channel)
    if (user) {
      history.replace('profile')
    } else {
      history.replace('/')
    }
  }
}

export function* loginRootSaga() {
  yield fork(loginStatusWatcher)
  yield all([
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGINGOOGLE.REQUEST, loginGoogleSaga),
    takeEvery(types.SIGNUP.REQUEST, createUserSaga),
    takeEvery(types.SIGNUP.SUCCESS, addUser),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
    takeEvery(types.RESET.REQUEST, sendPasswordResetEmailSaga),
    takeEvery(types.LOGINFB.REQUEST, loginFacebookSaga),
  ])
}

export function* rootSaga() {
  yield all([fork(loginRootSaga)])
}