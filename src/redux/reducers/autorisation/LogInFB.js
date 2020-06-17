import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  loggedIn: false,
  data: null
}

export function loginFBReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGINFB.REQUEST:
      return {   
        ...state,
        loading: true,
        data: action.data, 
      }
    case types.LOGINFB.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        data: action.data, 
      }
    case types.LOGINFB.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}