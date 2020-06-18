import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'
import firebase from 'firebase'
import { typesUser } from '../../actions/user/Username'


export function* getUserSaga({email}) {
  const allUsers = yield call(rsf.database.read, `users/`);
  let name = 'Helno'; 
  let allObjects = [];
  for (const item of Object.entries(allUsers)) {
    allObjects.push(item[1])
  } 
  console.log('allObjects', allObjects)
  for (const item of allObjects) {
    if (item.email == email) name = item.username
  } 
  yield put({type: typesUser.USERNAME.SUCCESS, user: name });
}

