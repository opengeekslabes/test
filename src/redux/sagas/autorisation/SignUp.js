import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import { signupSuccess, signupFailure } from '../../actions/autorisation/SignUp'
import rsf from '../../../rsf/rsf'
import { typesUser } from '../../actions/user/Username'

export function* createUserSaga({email, password, name}) {
  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);

    const currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({
      displayName: name,
    }).then(function() {
    }).catch(function(error) {
      console.log(error.message)
    });
    yield put(signupSuccess(name, email));

  }
  catch(error) {
    yield put(signupFailure(error));
  }
}
export function* addUser({email}) {
  try {
    const key = yield call(rsf.database.create, 'users/', {
      email: email,
    })
  }
  catch(error) {
    yield put(signupFailure(error));
  }
};
