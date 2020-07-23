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
    key: null
}

export function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case postsTypes.POST.GET: 
      return {   
        ...state,
        email: action.data,
        key: action.data
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
  url: [],
  key: null
}

export function storageReducer(state = initialStateSend, action = {}) {
  switch (action.type) {
    case postsTypes.SEND.SET_FILE:
      console.log(state.url)
      return {
        ...state,
        url: state.url.concat(action.data)
      }
    case postsTypes.SEND.GET_FILE_URL:
      return {
        ...state,
        loading: false,
      }
    case postsTypes.SEND.SEND_FILE:
      console.log(action.data.key)
      return {
        ...state,
        file: action.data,
        email: action.data,
        key: action.data,
        loading: true,
      }
    default:
      return state
  }
}