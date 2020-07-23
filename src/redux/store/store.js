import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import combineReducers from '../reducers/index'
import { rootSaga } from '../sagas/index'


const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
)


const store = createStore(combineReducers, enhancers)

sagaMiddleware.run(rootSaga)

export default store
