import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  email: null,
  password: null,
}

export function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
      return {   
        ...state,
        loading: true,
        email: action.email, 
        password: action.password,
      }
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user, 
      }
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
