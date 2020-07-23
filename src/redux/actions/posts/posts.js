import {postsTypes} from './postsTypes'

<<<<<<< HEAD
export const sendFile = data => ({
  type: postsTypes.SEND.SEND_FILE,
  data
})

export const getFileURL = data => ({
  type: postsTypes.SEND.GET_FILE_URL,
  data,
})

export const setFile = data => ({
  type: postsTypes.SEND.SET_FILE,
  data,
=======
export const setFile = data => ({
  type: postsTypes.SEND.SET_FILE,
  data,
})

export const setFileURL = data => ({
  type: postsTypes.SEND.SET_FILE_URL,
  data,
})

export const sendFile = data => ({
  type: postsTypes.SEND.SEND_FILE,
  data
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
})

export const postPush = data => ({
  type: postsTypes.POST.PUSH,
  data
})

export const postGet = data => ({
  type: postsTypes.POST.GET,
  data
})

export const postGetSuccess = data => ({
  type: postsTypes.POST.GET_SUCCESS,
  data
})

export const postRemove = data => ({
  type: postsTypes.POST.REMOVE,
  data
})