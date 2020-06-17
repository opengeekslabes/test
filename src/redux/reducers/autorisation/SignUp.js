import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  email: null,
  password: null,
  name: null
}

export function signupReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP.REQUEST:
      return {   
        ...state,
        loading: true,
        email: action.email, 
        password: action.password,
        name: action.name
      }
    case types.SIGNUP.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        name: action.name, 
      }
    case types.SIGNUP.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
