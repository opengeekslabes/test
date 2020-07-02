import { postsTypes } from '../../actions/posts/postsTypes'

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
    case postsTypes.POST.PUSH:
      return {   
        ...state,
        email: action.data,
        postHeadline: action.data,
        postText: action.data,
        files: action.data
      }
    case postsTypes.POST.GET: 
      return {   
        ...state,
        email: action.data,

      }
  
    case postsTypes.POST.GET_SUCCESS:
      if(!action.data) action.data = {}
    return {   
        ...state,
        posts: action.data
    }
    case postsTypes.POST.REMOVE:
        return {   
            ...state,
            email: action.data,
            id: action.data,
            index: action.data
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
    case postsTypes.SEND.SET_FILE:
      return {
        ...state,
        file: action.data,
      }
    case postsTypes.SEND.SET_FILE_URL:
      return {
        ...state,
        loading: false,
        url: action.data,
      }
    case postsTypes.SEND.SEND_FILE:
      return {
        ...state,
        file: action.data,
        email: action.data,
        loading: true,
      }
    default:
      return state
  }
}