<<<<<<< HEAD
import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'

export function* deleteFileSaga({data}) {
    console.log(data.i)
    yield call(rsf.storage.deleteFile, `files/${data.path}/${data.name}`);
}
=======
import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'

export function* deleteFileSaga({data}) {
    console.log(data.i)
    yield call(rsf.storage.deleteFile, `files/${data.path}/${data.name}`);
}
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
  