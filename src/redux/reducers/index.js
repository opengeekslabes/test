import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { userReducer } from './user/Username'
import { DragAndDropReducer } from './draganddrop/DragAndDrop'
import { postsReducer, storageReducer } from './posts/posts'
import { editProfileReducer } from './changeprofile/changeprofile'

export default combineReducers({
  userReducer,
  DragAndDropReducer,
  postsReducer,
  storageReducer,
  editProfileReducer,
  routing: routerReducer,
})