<<<<<<< HEAD
import {all, fork, takeLatest, takeEvery} from 'redux-saga/effects'
import {types} from '../actions/autorisation/Types'
import {postsTypes} from '../actions/posts/postsTypes'
import {linkAccountsTypes} from '../actions/linkaccounts/linkaccounts'
=======
import {all, fork, takeLatest} from 'redux-saga/effects'
import {types} from '../actions/autorisation/Types'
import {postsTypes} from '../actions/posts/postsTypes'
import {typesDragAndDrop} from '../actions/draganddrop/DragAndDrop'
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
import {loginSaga, refreshUserData} from './autorisation/Login'
import {loginGoogleSaga} from './autorisation/LogInGoogle'
import {createUserSaga} from './autorisation/SignUp'
import {logoutSaga} from './autorisation/Logout'
import {sendPasswordResetEmailSaga} from './autorisation/ResetPassword'
import {loginFacebookSaga} from './autorisation/LogInFB'
import {createPostSaga, deletePostSaga, getPostsSaga} from './posts/posts'
<<<<<<< HEAD
import {editProfTypes} from '../actions/changeprofile/changeprofile'
import {editProfilePicSaga, uProfileSaga} from './changeprofile/changeprofile'
import {getFbPagesSaga, getUserLLTokenSaga, postToFBSaga, getFbPagesDBSaga} from './linkacounts/linkacounts'
=======
import {sendFileSaga} from './posts/storage'
import {deleteFileSaga} from './draganddrop/draganddrop'
import {editProfTypes} from '../actions/changeprofile/changeprofile'
import {editProfilePicSaga, uProfileSaga} from './changeprofile/changeprofile'
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3

export function* loginRootSaga() {
  yield all([
    takeLatest(types.REFRESH.ACTION, refreshUserData),

    takeLatest(types.LOGIN.ACTION, loginSaga),
    takeLatest(types.LOGINGOOGLE.ACTION, loginGoogleSaga),
    takeLatest(types.SIGNUP.ACTION, createUserSaga),
<<<<<<< HEAD
    takeLatest(types.LOGOUT.ACTION, logoutSaga),
    takeLatest(types.RESET.REQUEST, sendPasswordResetEmailSaga),
    takeLatest(types.LOGINFB.ACTION, loginFacebookSaga),
    takeEvery(postsTypes.POST.PUSH, createPostSaga),
    takeEvery(postsTypes.POST.GET, getPostsSaga),
    takeLatest(postsTypes.POST.REMOVE, deletePostSaga),
    takeLatest(editProfTypes.EDITPROFILE.ACTION, editProfilePicSaga),
    takeLatest(editProfTypes.EDITPROFILE.SUCCESS, uProfileSaga),
    takeEvery(linkAccountsTypes.GET.USER_LL_TOKEN, getUserLLTokenSaga),
    takeLatest(linkAccountsTypes.GET.FB_PAGES, getFbPagesSaga),
    takeEvery(linkAccountsTypes.POST.FB, postToFBSaga),
    takeLatest(linkAccountsTypes.GET.FB_PAGES_DB, getFbPagesDBSaga),
=======
    takeLatest(postsTypes.SEND.SEND_FILE, sendFileSaga),
    takeLatest(types.LOGOUT.ACTION, logoutSaga),
    takeLatest(types.RESET.REQUEST, sendPasswordResetEmailSaga),
    takeLatest(types.LOGINFB.ACTION, loginFacebookSaga),
    takeLatest(postsTypes.POST.PUSH, createPostSaga),
    takeLatest(postsTypes.POST.GET, getPostsSaga),
    takeLatest(postsTypes.POST.REMOVE, deletePostSaga),
    takeLatest(postsTypes.POST.REMOVE, deletePostSaga),
    takeLatest(editProfTypes.EDITPROFILE.ACTION, editProfilePicSaga),
    takeLatest(editProfTypes.EDITPROFILE.SUCCESS, uProfileSaga),
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
  ])
}

export function* rootSaga() {
  yield all([fork(loginRootSaga)])
}