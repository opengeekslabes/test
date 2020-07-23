import { call, put } from 'redux-saga/effects'
import rsf from '../../../rsf/rsf'
import firebase from 'firebase'
import { postGet, postGetSuccess, sendFile } from '../../actions/posts/posts'
<<<<<<< HEAD
import { setPostProps } from '../../actions/linkaccounts/linkaccounts'

export function* createPostSaga({ data }) {
  try {
    const path = data.email.split('').filter(item => item !== '.').join('');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    const postDate = `${months[date.getMonth()]} ${date.getDate()}`;
    const postTime = `${date.getHours()}:${date.getMinutes()}`

    let key = Date.now();
    const ref = firebase.database().ref(`users/${path}`).child(`posts/${key}`);

    const newPost = {
      key: key,
      postDate: postDate,
      postHeadline: data.headline,
      postText: data.postText,
      postTime: postTime,
      content: []
    };

    const email = data.email;

    for (const file of data.content) {
      const storageRef = firebase.storage().ref(`files/${email}/${key}/${file.name}`)
      const res = yield storageRef.put(file)
      const url = yield call(rsf.storage.getDownloadURL, storageRef);
      newPost.content.push({key: Date.now(), type: file.type, url: url, name: file.name})
  };

    ref.set(newPost)    
    yield put(postGet({ path, key }))
    yield put(setPostProps({ newPost }))

  }

  catch (error) {
    console.log('NONONO', error)
  }
}

export function* getPostsSaga({ data }) {
  const posts = yield call(rsf.database.read, `users/${data.path}`);

  yield put(postGetSuccess(posts));
}

export function* deletePostSaga({ data }) {
  const path = data.email.split('').filter(item => item !== '.').join('');
  yield call(rsf.database.delete, `users/${path}/posts/${data.ind}`);
  yield put(postGet({ path }))
=======

export function* createPostSaga({data}) {
  try {
    console.log(data.email)

      const path = data.email.split('').filter(item => item !== '.').join('');
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']   
      const date = new Date();
      const postDate = `${months[date.getMonth()]} ${date.getDate()}`;
      const postTime = `${date.getHours()}:${date.getMinutes()}`

      firebase.database().ref(`users/${path}`).child('posts').push({
        key: Date.now(),
        postDate: postDate,
        postHeadline: data.headline,
        postText: data.postText,
        postTime: postTime,
      });
      yield put(postGet({path}))
      const email = data.email;
      //TODO  SMT
      for (const file of data.files) {
        console.log(file)
        yield put(sendFile({file, email}))
      }
    }

  catch(error) {
    console.log('NONONO')
  }
}

export function* getPostsSaga({data}) {
  const posts = yield call(rsf.database.read, `users/${data.path}`);
  yield put(postGetSuccess(posts));
}

export function* deletePostSaga({data}) {
  console.log(data)
  const path = data.email.split('').filter(item => item !== '.').join('');
  console.log('SAGA WORKIN', data.ind)
  yield call(rsf.database.delete, `users/${path}/posts/${data.ind}`);
  yield put(postGet({path}))
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
}