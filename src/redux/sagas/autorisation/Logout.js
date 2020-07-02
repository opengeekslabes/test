import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'
import {types} from "../../actions/autorisation/Types";

export function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut)
    yield put({type: types.USER.RESPONSE, data: null});
  } catch (error) {
  }
}
