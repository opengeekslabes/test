import {call, put} from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'
import {types} from "../../actions/autorisation/Types";

export function* createUserSaga({data}) {
    try {
        const user = yield call(rsf.auth.createUserWithEmailAndPassword, data.email, data.password)

        const updatedUser = yield call(rsf.auth.updateProfile, {
            displayName: data.name,
        });

        yield put({type: types.USER.RESPONSE, data: updatedUser});
    } catch (error) {
        console.log('NONONO', error)
        yield put({type: types.USER.ERROR, error});
    }
}
