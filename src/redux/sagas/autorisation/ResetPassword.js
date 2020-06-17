import { call, put } from 'redux-saga/effects'
import { resetSuccess, resetFailure } from '../../actions/autorisation/ResetPassword'
import rsf from '../../../rsf/rsf'

export function* sendPasswordResetEmailSaga({email}) {
  try {
    yield call(rsf.auth.sendPasswordResetEmail, email);
    yield put(resetSuccess());
  }
  catch(error) {
    yield put(resetFailure(error));
  }
}
