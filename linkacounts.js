import React from 'react';
import { call, put } from 'redux-saga/effects'
import axios from "axios";
import {setFbPages} from '../../actions/linkaccounts/linkaccounts'
import firebase from 'firebase'


export function* getUserTokenSaga({data}) {
  
  try {

    const ref = firebase.database().ref(`users/${data.path}`).child(`social-accounts/facebook/`);
    const facebook = {};
    let res;
    yield call(window.FB.login(function (response) {
      if (response.status === 'connected') {
        res = response;
        console.log(response)
      } else {
          console.log(response)
      }
  }, {
      scope: [`pages_manage_ads`, `pages_manage_metadata`, `pages_read_engagement`,
          `pages_read_user_content`, `pages_manage_posts`, `pages_manage_engagement`, `publish_to_groups`]
  }))
  debugger
  const longAccessToken = yield call(axios.get, `https://graph.facebook.com/v7.0/oauth/access_token?  
          grant_type=fb_exchange_token&          
          client_id=901246677054440&
          client_secret=92c122e55bc4dad9a99c805607814d0e&
          fb_exchange_token=${res.authResponse.accessToken}`);

          facebook.userId = res.authResponse.userID;
          facebook.longLivedAccessToken = longAccessToken.data.access_token;

  console.log(facebook)
    // const longAccessToken =  yield call(axios.get, `https://graph.facebook.com/v7.0/oauth/access_token?  
    // grant_type=fb_exchange_token&          
    // client_id=901246677054440&
    // client_secret=92c122e55bc4dad9a99c805607814d0e&
    // fb_exchange_token=${data.accessToken}`);

    
    // const facebook = {
    //   userId: data.userId,
    //   longLivedAccessToken: longAccessToken.data.access_token,
    // };
    ref.set(facebook)

    // const accounts =  yield call(axios.get, `https://graph.facebook.com/${data.userId}/accounts?
    //     fields=name,access_token&
    //     access_token=${data.accessToken}`);
        
        //const res =  yield call(axios.get, `https://graph.facebook.com/v7.0/{data.userId}/accounts?
  // access_token={long-lived-user-access-token`}

    // const fbPages = accounts.data.data;
    // for (const page of fbPages) {
    //   const accountPicture =  yield call(axios.get, `https://graph.facebook.com/${page.id}/picture?redirect=0&type=large`);
    //   page.picture = accountPicture.data.data.url
    // }
    //console.log(fbPages)
//    yield put(setFbPages({fbPages}))
 //   const res1 =  yield call(axios.post, `https://graph.facebook.com/${fbPageTd}/feed?message=HENLO!&access_token=${fbPageAccT}`);
    


}
  catch(error) {
    console.log('NONONO')
  }  

    


}

export function* getFbPagesSaga({data}) {
  try {

    const longAccessToken =  yield call(axios.get, `https://graph.facebook.com/v7.0/oauth/access_token?  
    grant_type=fb_exchange_token&          
    client_id=901246677054440&
    client_secret=92c122e55bc4dad9a99c805607814d0e&
    fb_exchange_token=${data.accessToken}`);

    const ref = firebase.database().ref(`users/${data.path}`).child(`social-accounts/facebook/`);
    const facebook = {
      userId: data.userId,
      longLivedAccessToken: longAccessToken.data.access_token,
    };
    ref.set(facebook)

    const accounts =  yield call(axios.get, `https://graph.facebook.com/${data.userId}/accounts?
        fields=name,access_token&
        access_token=${data.accessToken}`);
        
        //const res =  yield call(axios.get, `https://graph.facebook.com/v7.0/{data.userId}/accounts?
  // access_token={long-lived-user-access-token`}

    const fbPages = accounts.data.data;
    for (const page of fbPages) {
      const accountPicture =  yield call(axios.get, `https://graph.facebook.com/${page.id}/picture?redirect=0&type=large`);
      page.picture = accountPicture.data.data.url
    }
    //console.log(fbPages)
    yield put(setFbPages({fbPages}))
 //   const res1 =  yield call(axios.post, `https://graph.facebook.com/${fbPageTd}/feed?message=HENLO!&access_token=${fbPageAccT}`);
    


}
  catch(error) {
    console.log('NONONO')
  }  

    


}

