import { linkAccountsTypes } from '../../actions/linkaccounts/linkaccounts'

const initialState = {
    userID: null,
    userAccessToken: null,
    fbPages: [],
    postProps: null,
    fbPagesDB: [],
}

export function linkAccountsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case linkAccountsTypes.GET.USER_TOKEN:
      return {   
        ...state,
      }
    case linkAccountsTypes.SET.USER_TOKEN:
      return {   
        ...state,
        userID: action.data,
        userAccessToken: action.data,

      }
    case linkAccountsTypes.GET.FB_PAGES:
      return {   
        ...state,
      }
    case linkAccountsTypes.SET.FB_PAGES:
      return {   
        ...state,
        fbPages: action.data,
      }
    case linkAccountsTypes.POST.FB:
      return {   
        ...state,
      }
    case linkAccountsTypes.SET.POST_PROPS:
      return {   
        ...state,
        postProps: action.data.newPost
      }
    case linkAccountsTypes.GET.FB_PAGES_DB:
      return {   
        ...state,
        fbPagesDB: action.data
    }
    default:
      return state
  }
}
