import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  user: null,
}

export function logoutReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
        user: action.user, 
      }
    case types.LOGOUT.SUCCESS:
      return initialState
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}