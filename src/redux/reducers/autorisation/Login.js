import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  user: null,
  email: null,
  password: null,
}

export function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      }
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.data,
      }
    default:
      return state
  }
}
