import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//reducers produce the application state
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
