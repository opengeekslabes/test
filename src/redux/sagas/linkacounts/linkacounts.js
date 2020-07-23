import React from 'react';
import { call, put } from 'redux-saga/effects'
import axios from "axios";
import {setFbPages} from '../../actions/linkaccounts/linkaccounts'
import firebase from 'firebase'
import rsf from '../../../rsf/rsf'

    // const longAccessToken = yield call(axios.get, `https://graph.facebook.com/v7.0/oauth/access_token?  
    //       grant_type=fb_exchange_token&          
    //       client_id=901246677054440&
    //       client_secret=92c122e55bc4dad9a99c805607814d0e&
    //       fb_exchange_token=${res.authResponse.accessToken}`);

    //       facebook.userID = res.authResponse.userID;
    //       facebook.longLivedAccessToken = longAccessToken.data.access_token;
    //       console.log(longAccessToken)
    // const res =  yield call(axios.get, `https://graph.facebook.com/${data.userID}/accounts?
    //     fields=name,access_token&
    //     access_token=${data.accessToken}`);

    // const fbPages = res.data.data;
    // for (const page of fbPages) {

    //   window.FB.api(
    //     `/${page.id}/picture`,
    //     {
    //         "redirect": "0"
    //     },
    //     function (response) {
    //       if (response && !response.error) {
    //         page.q = response.data.url
    //       }
    //     }
    //   );      

    // }
    // console.log(fbPages)
    // yield put(setFbPages({fbPages}))
 //   const res1 =  yield call(axios.post, `https://graph.facebook.com/${fbPageTd}/feed?message=HENLO!&access_token=${fbPageAccT}`);
    

 


export function* getUserLLTokenSaga({data}) {

  const FB = window.FB; 
  const ref = firebase.database().ref(`users/${data.path}`).child(`social-accounts/facebook/`);
  const facebook = {};
  const secret = '92c122e55bc4dad9a99c805607814d0e';
  try {

    const longAccessToken = fetch(`https://graph.facebook.com/v7.0/oauth/access_token?  
    grant_type=fb_exchange_token&          
    client_id=901246677054440&
    client_secret=${secret}&
    fb_exchange_token=${data.userAccessToken}`)
    .then(response => response.json())
    .then(result => {
      facebook.userID = data.userID;
      facebook.longLivedAccessToken = result.access_token;
      ref.set(facebook)
    })
}
  catch(error) {
    console.log(error)
  }  
}

export function* getFbPagesSaga({data}) {
  debugger
  const FB = window.FB; 
  const ref = `users/${data.path}/social-accounts/facebook`;
  const llUserToken = yield call(rsf.database.read, `${ref}/longLivedAccessToken`);
  try {
    const res = yield call(axios.get,`https://graph.facebook.com/v7.0/${data.userID}/accounts?
    access_token=${llUserToken}`)
    const fbPages = res.data.data;
    for (const page of fbPages) {
      const accountPicture =  yield call(axios.get, `https://graph.facebook.com/${page.id}/picture?redirect=0&type=large`);
      page.key = Date.now();
      page.picture = accountPicture.data.data.url;
    }
    yield put(setFbPages({fbPages}))

    firebase.database().ref(`users/${data.path}/social-accounts/facebook`).child(`pages/`).set(fbPages)
  }
  
  catch(error) {
    console.log(error)
  }  
}

export function* getFbPagesDBSaga({data}) {
  const ref = `users/${data.path}/social-accounts/facebook/pages`;
  try {
    const fbPages = yield call(rsf.database.read, `${ref}`);
    yield put(setFbPages(fbPages))
  }
  catch(error) {
    console.log(error)
  }  
}

export function* postToFBSaga({data}) {
  const FB = window.FB;
  const pages = data.chosenAccounts;
  const postText = data.postProps.postText;

  const arr = [];
  for (const file of data.postProps.content) {
    arr.push(file.url)
  }
  console.log(arr)
try {
  for(let key in pages) {
  const attached_media = []
  const token = pages[key];
  const id = key;
    for (const url of arr) {
      FB.api(
        `/${key}/photos`,
        "POST",
        {   "url": url,
            "published": "false",
            "access_token": `${pages[key]}`,
            },
          function (response) {
            if (response && !response.error) {
              attached_media.push({"media_fbid": `${response.id}`});
          }
        }
      )
    }
    setTimeout(function(){ toFB({postText, attached_media, id, token}) }, 8000);
   

  }
}
  catch(error) {
    console.log(error)
  }  
}

function toFB (data) {
  const FB = window.FB;
  console.log(data)
  try {
    FB.api(
    `/${data.id}/feed`,
      "POST", {   
        "message": `${data.postText}`,
        "attached_media": data.attached_media,
        "access_token": `${data.token}`,
      },
      function (response) {
        if (response && !response.error) {

          console.log(response)
        }
      }
    );

  }
  catch(error) {
    console.log(error)
  }  
}