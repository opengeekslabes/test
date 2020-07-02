import {all, fork, takeLatest} from 'redux-saga/effects'
import {types} from '../actions/autorisation/Types'
import {postsTypes} from '../actions/posts/postsTypes'
import {typesDragAndDrop} from '../actions/draganddrop/DragAndDrop'
import {loginSaga, refreshUserData} from './autorisation/Login'
import {loginGoogleSaga} from './autorisation/LogInGoogle'
import {createUserSaga} from './autorisation/SignUp'
import {logoutSaga} from './autorisation/Logout'
import {sendPasswordResetEmailSaga} from './autorisation/ResetPassword'
import {loginFacebookSaga} from './autorisation/LogInFB'
import {createPostSaga, deletePostSaga, getPostsSaga} from './posts/posts'
import {sendFileSaga} from './posts/storage'
import {deleteFileSaga} from './draganddrop/draganddrop'

export function* loginRootSaga() {
  yield all([
    takeLatest(types.REFRESH.ACTION, refreshUserData),

    takeLatest(types.LOGIN.ACTION, loginSaga),
    takeLatest(types.LOGINGOOGLE.ACTION, loginGoogleSaga),
    takeLatest(types.SIGNUP.ACTION, createUserSaga),
    takeLatest(postsTypes.SEND.SEND_FILE, sendFileSaga),
    takeLatest(types.LOGOUT.ACTION, logoutSaga),
    takeLatest(types.RESET.REQUEST, sendPasswordResetEmailSaga),
    takeLatest(types.LOGINFB.ACTION, loginFacebookSaga),
    takeLatest(postsTypes.POST.PUSH, createPostSaga),
    takeLatest(postsTypes.POST.GET, getPostsSaga),
    takeLatest(postsTypes.POST.REMOVE, deletePostSaga),
//    takeLatest(typesDragAndDrop.DROP.REMOVE, deleteFileSaga),
  ])
}

export function* rootSaga() {
  yield all([fork(loginRootSaga)])
}