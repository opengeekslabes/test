import { call, put, take } from 'redux-saga/effects'
import { types } from "../../actions/autorisation/Types";
import rsf from '../../../rsf/rsf'

export function* loginSaga({ data }) {
<<<<<<< HEAD
=======
    console.log('TRYIN TO LOGIN')
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
    try {
        const { user } = yield call(rsf.auth.signInWithEmailAndPassword, data.email, data.password);

        yield put({ type: types.USER.RESPONSE, data: user });
    } catch (error) {
        yield put({ type: types.USER.ERROR, error });
    }
}

export function* refreshUserData() {
    yield put({ type: types.USER.REQUEST })
    const channel = yield call(rsf.auth.channel)
    try {
        const { user } = yield take(channel)
        if (user) {
            yield put({ type: types.USER.RESPONSE, data: user })
        } else {
            yield put({ type: types.REFRESH.FAIL })
        }
    } catch (error) {
        yield put({ type: types.USER.ERROR, error });
    }
}

