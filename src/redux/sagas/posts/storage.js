import { all, call, put, select, takeEvery } from 'redux-saga/effects'

import { typesSend, setFileURL } from '../../actions/posts/posts'

import rsf from '../../../rsf/rsf'
import firebase from 'firebase'

function* syncFileUrl(storageRef) {
  try {
    const url = yield call(rsf.storage.getDownloadURL, storageRef)
    yield put(setFileURL(url))
  } catch (error) {
    console.error(error)
  }
}

export function* sendFileSaga({file, email}) {
  console.log('TRYIN TO SEND')
  const storageRef = firebase.storage().ref(`files/${email}/${file.name}`)
  yield storageRef.put(file)

  yield call(syncFileUrl(storageRef))
}
