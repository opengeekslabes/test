import { types } from '../../actions/autorisation/Types'

const initialState = {
  loading: false,
  user: null,
}

export function resetReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET.REQUEST:
      return {   
        ...state,
        loading: true,
        user: action.user, 
      }
    case types.RESET.SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user, 
      }
    case types.RESET.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
