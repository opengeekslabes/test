import { all, call, fork, take, takeEvery, put } from 'redux-saga/effects'
import firebase from 'firebase'
import { types } from '../actions/autorisation/Types'
import { typesPosts, postGet, typesSend } from '../actions/posts/posts'
import { typesUser } from '../actions/user/Username'
import rsf from '../../rsf/rsf'
import { history } from '../../components/App'
import { loginSaga } from './autorisation/Login'
import { loginGoogleSaga } from './autorisation/LogInGoogle'
import { createUserSaga, addUser } from './autorisation/SignUp'
import { logoutSaga } from './autorisation/Logout'
import { sendPasswordResetEmailSaga } from './autorisation/ResetPassword'
import { loginFacebookSaga } from './autorisation/LogInFB'
import { createPostSaga, getPostsSaga, deletePostSaga } from './posts/posts'
import { sendFileSaga } from './posts/storage'

function* loginStatusWatcher() {
  const channel = yield call(rsf.auth.channel)
  while (true) {
    const { user } = yield take(channel)
    if (user) {
//      yield put({type: typesUser.USERNAME.SUCCESS, email: user.email, name: user.displayName });
      yield put(postGet(user.email))
      history.replace('profile')
    } else {
      history.replace('/')
    }
  }
}

export function* loginRootSaga() {
  yield fork(loginStatusWatcher)
  yield all([
    takeEvery(types.LOGIN.ACTION, loginSaga),
    takeEvery(types.LOGINGOOGLE.REQUEST, loginGoogleSaga),
    takeEvery(types.SIGNUP.REQUEST, createUserSaga),
    takeEvery(typesSend.SEND_FILE, sendFileSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
    takeEvery(types.RESET.REQUEST, sendPasswordResetEmailSaga),
    takeEvery(types.LOGINFB.REQUEST, loginFacebookSaga),
    takeEvery(typesPosts.POST.PUSH, createPostSaga),
    takeEvery(typesPosts.POST.GET, getPostsSaga),
    takeEvery(typesPosts.POST.REMOVE, deletePostSaga),
    takeEvery(typesUser.USERNAME.REQUEST, deletePostSaga),
  ])
}

export function* rootSaga() {
  yield all([fork(loginRootSaga)])
}