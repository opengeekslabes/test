import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

export const myFirebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyD9oKj_KXd-TLvHMojJwvjBNytQLpgbYOs",
    authDomain: "test-6b88b.firebaseapp.com",
    databaseURL: "https://test-6b88b.firebaseio.com",
    projectId: "test-6b88b",
    storageBucket: "test-6b88b.appspot.com",
    messagingSenderId: "1044680190266",
    appId: "1:1044680190266:web:108db50c5421ed99c00803"
});
const rsf = new ReduxSagaFirebase(myFirebaseApp)
export const database = firebase.database();

export default rsf