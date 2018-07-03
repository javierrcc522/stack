import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  //reducers produce the application state
  libraries: LibraryReducer
});
