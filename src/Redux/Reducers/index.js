import { combineReducers } from 'redux'
import navesReducer from './navesReducer'
import naveDetailReducer from './naveDetailReducer'
import pilotsReducer from './pilotsReducer'

export default combineReducers({
  navesReducer,
  naveDetailReducer,
  pilotsReducer,
})