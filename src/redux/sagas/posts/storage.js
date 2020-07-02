import { all, call, put, select, takeEvery } from 'redux-saga/effects'

import { setFileURL } from '../../actions/posts/posts'

import rsf from '../../../rsf/rsf'
import firebase from 'firebase'

function* syncFileUrl(storageRef) {
  try {
    const url = yield call(rsf.storage.getDownloadURL, storageRef)
    yield put(setFileURL({url}))
    console.log(url)
  } catch (error) {
    console.log('ERROR')
    console.error(error)
  }
}

export function* sendFileSaga({data}) {
  console.log('TRYIN TO SEND',data.email, data.file.name)
  const storageRef = firebase.storage().ref(`files/${data.email}/${data.file.name}`)
  console.log('storageRef', storageRef)
  yield storageRef.put(data.file)

//  yield call(syncFileUrl(storageRef))
}
