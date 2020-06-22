import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'
import firebase from 'firebase'
import { typesUser } from '../../actions/user/Username'


//export function* getUserSaga({email}) {
//  const currentUser = firebase.auth().currentUser;
//  yield put({type: typesUser.USERNAME.SUCCESS, name: currentUser.displayName });
//}

