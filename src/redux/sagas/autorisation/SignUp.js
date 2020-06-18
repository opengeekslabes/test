import { call, put } from 'redux-saga/effects'
import { signupSuccess, signupFailure } from '../../actions/autorisation/SignUp'
import rsf from '../../../rsf/rsf'
import { typesUser } from '../../actions/user/Username'

export function* createUserSaga({email, password, name}) {
  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    yield put(signupSuccess(name, email));
    yield put({ type: typesUser.USERNAME.REQUEST, email: email });
  }
  catch(error) {
    yield put(signupFailure(error));
  }
}
export function* addUser({name, email}) {
  try {
    const key = yield call(rsf.database.create, 'users/', {
      email: email,
      username: name,
    })
  }
  catch(error) {
    yield put(signupFailure(error));
  }
};
