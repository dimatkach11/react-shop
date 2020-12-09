import { combineReducers, createStore } from 'redux'
import testReducer from './test-reduser'

const redusers = combineReducers({
  test: testReducer,
})

const store = createStore(redusers)
window.__store__ = store
export default store
