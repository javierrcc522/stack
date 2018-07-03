import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//reducers produce the application state
export default combineReducers({
  libraries: LibraryReducer
});
