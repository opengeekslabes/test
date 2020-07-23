import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { userReducer } from './user/Username'
import { DragAndDropReducer } from './draganddrop/DragAndDrop'
import { postsReducer, storageReducer } from './posts/posts'
import { editProfileReducer } from './changeprofile/changeprofile'
<<<<<<< HEAD
import { linkAccountsReducer } from './linkaccounts/linkaccounts'
=======
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3

export default combineReducers({
  userReducer,
  DragAndDropReducer,
  postsReducer,
  storageReducer,
  editProfileReducer,
<<<<<<< HEAD
  linkAccountsReducer,
=======
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
  routing: routerReducer,
})