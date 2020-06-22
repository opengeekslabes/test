import { typesUser } from '../../actions/user/Username'

const initialState = {
  user: 'null',
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case typesUser.USERNAME.REQUEST:
      return {   
        ...state,
        name: action.name,
      }
    case typesUser.USERNAME.SUCCESS:
      return {   
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}
