import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import {types} from "../../actions/autorisation/Types";
import rsf from '../../../rsf/rsf'

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export function* loginFacebookSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, facebookProvider)
    const user = firebase.auth().currentUser;
    console.log(user)
    yield put({type: types.USER.RESPONSE, data: user});
  } catch (error) {
    console.log(error)
    yield put({type: types.USER.ERROR, error});
  }
}


