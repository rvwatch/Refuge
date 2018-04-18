import { combineReducers } from 'redux';
import fitbitData from './fitbitDataReducer';
import heartRate from './heartRateReducer';
import stepsTaken from './stepsTakenReducer';
import user from './addUserReducer';
import restingHeart from './addRestingHeartReducer';
import loggedIn from './setLoggedInReducer';


const rootReducer = combineReducers({
  fitbitData,
  heartRate,
  stepsTaken,
  user,
  restingHeart,
  loggedIn
});

export default rootReducer;
