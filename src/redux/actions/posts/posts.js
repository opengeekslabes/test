export const typesPosts = {
  POST: {
    PUSH: 'POST.PUSH',
    GET: 'POST.GET',
    GET_SUCCESS: 'POST.GET_SUCCESS',
    REMOVE: 'POST.REMOVE',
  },
}

export const typesSend = {
  SEND_FILE: 'SEND_FILE',
  SET_FILE: 'SET_FILE',
  SET_FILE_URL: 'SET_FILE_URL',
}

export const setFile = file => ({
  type: typesSend.SET_FILE,
  file,
})

export const setFileURL = url => ({
  type: typesSend.SET_FILE_URL,
  url,
})

export const sendFile = (file, email) => ({
  type: typesSend.SEND_FILE,
  file,
  email
})



export const postPush = (email, postHeadline, postText, files) => ({
  type: typesPosts.POST.PUSH,
  email,
  postHeadline,
  postText,
  files
})

export const postGet = email => ({
  type: typesPosts.POST.GET,
  email
})

export const postGetSuccess = (posts) => ({
  type: typesPosts.POST.GET_SUCCESS,
  posts
})

export const postRemove = (email, id, index) => ({
  type: typesPosts.POST.REMOVE,
  email,
  id,
  index
})