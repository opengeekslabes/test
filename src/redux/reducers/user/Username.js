import { types } from '../../actions/user/Username'

const initialState = {
  name: null
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER.NAME:
      return {   
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}
