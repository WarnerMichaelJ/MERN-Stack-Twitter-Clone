import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import tweets from './tweets_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  tweets
});

export default RootReducer;