import { call, put } from 'redux-saga/effects'
import {types} from '../../actions/autorisation/Types'
import { editProfileSuccess } from '../../actions/changeprofile/changeprofile'

import rsf from '../../../rsf/rsf'
import firebase from 'firebase'

export function* uProfileSaga({data}) {
    console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNO')
    console.log(data.name, data.url)
    try {
      yield call(rsf.auth.updateProfile, {
        displayName: data.name,
        photoURL: data.url
      });
      yield put({ type: types.REFRESH.ACTION });
    }
    catch(error) {
        console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNO')
    }
  }

export function* editProfilePicSaga({data}) {
    try { 
        const storageRef = firebase.storage().ref(`files/${data.email}/profile-photo/${data.file}`)
        const name = data.name;
        yield storageRef.put(data.file)
        const url = yield call(rsf.storage.getDownloadURL, storageRef);
        debugger
        yield put(editProfileSuccess({name, url}))

    }
    catch(error) {
        console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNO')
    }

}
