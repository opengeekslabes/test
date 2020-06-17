import { call, put } from 'redux-saga/effects'
import { logoutFailure } from '../../actions/autorisation/Logout'
import rsf from '../../../rsf/rsf'

export function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut)
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error))
  }
}
