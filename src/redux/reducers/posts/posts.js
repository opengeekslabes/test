import { typesPosts, typesSend } from '../../actions/posts/posts'
import { routerActions } from 'react-router-redux'

const initialState = {
    email: null,
    postDate: null,
    postHeadline: null,
    postText: null,
    postTime: null,
    posts: null,
    id: null,
    index: null,
    files: null
}

export function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case typesPosts.POST.PUSH:
      return {   
        ...state,
        email: action.email,
        postHeadline: action.postHeadline,
        postText: action.postText,
        files: action.files
      }
    case typesPosts.POST.GET: 
      return {   
        email: action.email,
        ...state,
      }
  
    case typesPosts.POST.GET_SUCCESS:
      if(!action.posts) action.posts = {}
    return {   
        ...state,
        posts: action.posts
    }
    case typesPosts.POST.REMOVE:
        return {   
            ...state,
            email: action.email,
            id: action.id,
            index: action.index
        }
    default:
      return state
  }
}



const initialStateSend = {
  file: null,
  loading: false,
  url: null,
}

export function storageReducer(state = initialStateSend, action = {}) {
  switch (action.type) {
    case typesSend.SET_FILE:
      return {
        ...state,
        file: action.file,
      }
    case typesSend.SET_FILE_URL:
      return {
        ...state,
        loading: false,
        url: action.url,
      }
    case typesSend.SEND_FILE:
      return {
        ...state,
        file: action.file,
        email: action.email,
        loading: true,
      }
    default:
      return state
  }
}