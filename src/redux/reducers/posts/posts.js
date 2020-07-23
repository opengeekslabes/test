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
<<<<<<< HEAD
    key: null
=======
    files: null
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
}

export function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
<<<<<<< HEAD
=======
    case postsTypes.POST.PUSH:
      return {   
        ...state,
        email: action.data,
        postHeadline: action.data,
        postText: action.data,
        files: action.data
      }
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
    case postsTypes.POST.GET: 
      return {   
        ...state,
        email: action.data,
<<<<<<< HEAD
        key: action.data
      }
=======

      }
  
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
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
<<<<<<< HEAD
  url: [],
  key: null
=======
  url: null,
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
}

export function storageReducer(state = initialStateSend, action = {}) {
  switch (action.type) {
    case postsTypes.SEND.SET_FILE:
<<<<<<< HEAD
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
=======
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
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
      return {
        ...state,
        file: action.data,
        email: action.data,
<<<<<<< HEAD
        key: action.data,
=======
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
        loading: true,
      }
    default:
      return state
  }
}