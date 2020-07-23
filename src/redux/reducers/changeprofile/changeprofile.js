import { editProfTypes } from '../../actions/changeprofile/changeprofile'

const initialState = {
    name: null,
    file: [],
    loading: false,
    success: 'null',
    url: null
}

export function editProfileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case editProfTypes.EDITPROFILE.ACTION:
      return {   
        ...state,
        name: action.data,
        file: action.data,
        loading: true,
      }
    case editProfTypes.EDITPROFILE.SUCCESS: 
    console.log(action.data)
      return {   
        ...state,
        name: action.data,
        url: action.data,
        loading: false,
        success: true,
      }
    case editProfTypes.EDITPROFILE.FAIL:
    return {   
        ...state,
        loading: false,
        success: false,
    }
    default:
      return state
  }
}
