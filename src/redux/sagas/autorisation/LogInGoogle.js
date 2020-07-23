import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'
import {types} from "../../actions/autorisation/Types";

const authProvider = new firebase.auth.GoogleAuthProvider()

export function* loginGoogleSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider)
    const user = firebase.auth().currentUser;
    console.log(user)
    yield put({type: types.USER.RESPONSE, data: user});


  } catch (error) {
    console.log(error)
    yield put({type: types.USER.ERROR, error});
  }
}
