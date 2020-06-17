import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
}

export function loginGoogleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGINGOOGLE.REQUEST:
      return {
        ...state,
        loading: true,
        user: action.user, 
      }
    case types.LOGINGOOGLE.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
      }
    case types.LOGINGOOGLE.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
