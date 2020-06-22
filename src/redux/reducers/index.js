import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { loginReducer } from './autorisation/Login'
import { loginGoogleReducer } from './autorisation/LogInGoogle'
import { signupReducer } from './autorisation/SignUp'
import { logoutReducer } from './autorisation/Logout'
import { resetReducer } from './autorisation/ResetPassword'
import { loginFBReducer } from './autorisation/LogInFB'
import { userReducer } from './user/Username'
import { DragAndDropReducer } from './draganddrop/DragAndDrop'

export default combineReducers({
  loginReducer,
  loginGoogleReducer,
  logoutReducer,
  signupReducer,
  resetReducer,
  loginFBReducer,
  userReducer,
  DragAndDropReducer,
  routing: routerReducer,
})