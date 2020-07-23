import { call, put } from 'redux-saga/effects'
import { resetSuccess, resetFailure } from '../../actions/autorisation/ResetPassword'
import rsf from '../../../rsf/rsf'

export function* sendPasswordResetEmailSaga({data}) {
  try {
    console.log('TRYIN TO RESET PASSWORD')
    yield call(rsf.auth.sendPasswordResetEmail, data.email);
    yield put(resetSuccess());
  }
  catch(error) {
    console.log('FAILED TO RESET PASSWORD')
    yield put(resetFailure(error));
  }
}
