import { combineReducers } from 'redux';
import home from './home/reducer';
import detail from './detail/reducer'
import favorite from './favorite/reducer'

export default combineReducers({
  home,
  detail,
  favorite,
});