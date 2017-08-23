import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Chr from './Chrrd'
import ViewChr from './ViewChr'


export default combineReducers({
  routing: routerReducer,
  ChrList: Chr,
  ViewChr: ViewChr
})