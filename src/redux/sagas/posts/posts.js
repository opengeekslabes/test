import { call, put } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from '../../actions/autorisation/Login'
import { types } from '../../actions/autorisation/Types'
import { typesUser } from '../../actions/user/Username'
import rsf from '../../../rsf/rsf'
import firebase from 'firebase'
import { database } from '../../../rsf/rsf'
import { postGet, postGetSuccess, sendFile, setFile } from '../../actions/posts/posts'

export function* createPostSaga({email, postHeadline, postText, files}) {
//  yield put({type: types.LOGIN.REQUEST})
  try {
    console.log('IM TRYING', email)

      const path = email.split('').filter(item => item !== '.').join('');
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']   
      const date = new Date();
      const postDate = `${months[date.getMonth()]} ${date.getDate()}`;
      const postTime = `${date.getHours()}:${date.getMinutes()}`

      firebase.database().ref(`users/${path}`).child('posts').push({
        key: Date.now(),
        postDate: postDate,
        postHeadline: postHeadline,
        postText: postText,
        postTime: postTime,
      });
      console.log("email: ", email)
      yield put(postGet(email))
      for (const file of files) {
        console.log(file)
        yield put(sendFile(file, email))
      }
    }
//    yield put(loginSuccess(user));

  catch(error) {
    console.log('NONONO')
//    yield put(loginFailure(error));
  }
}

export function* getPostsSaga({email}) {
  const path = email.split('').filter(item => item !== '.').join('');
  const posts = yield call(rsf.database.read, `users/${path}`);
//  if(!posts) return
  yield put(postGetSuccess(posts));
}

export function* deletePostSaga({email, id}) {
  const path = email.split('').filter(item => item !== '.').join('');
  console.log('SAGA WORKIN', id)
  yield call(rsf.database.delete, `users/${path}/posts/${id}`);
  console.log("EMAIL :", email, id)
  yield put(postGet(email))
}