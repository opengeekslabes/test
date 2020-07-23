import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'

export function* deleteFileSaga({data}) {
    console.log(data.i)
    yield call(rsf.storage.deleteFile, `files/${data.path}/${data.name}`);
}
  