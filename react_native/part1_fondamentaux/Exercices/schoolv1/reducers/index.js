import { combineReducers } from 'redux';

import school from './school';
import load from './load';
import error from './error';
import firebase from './firebase';

export default combineReducers({
   school,
   load,
   error,
   firebase
});