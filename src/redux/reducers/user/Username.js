import { typesUser } from '../../actions/user/Username'

const initialState = {
  user: 'null',
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case typesUser.USERNAME.REQUEST:
      return {   
        ...state,
        email: action.email
      }
    case typesUser.USERNAME.SUCCESS:
      return {   
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
