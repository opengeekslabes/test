import {postsTypes} from './postsTypes'

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