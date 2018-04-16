import { combineReducers } from 'redux';
import fitbitData from './fitbitDataReducer';
import heartRate from './heartRateReducer';
import stepsTaken from './stepsTakenReducer';
import user from './addUserReducer';
import restingHeart from './addRestingHeartReducer';

const rootReducer = combineReducers({
  fitbitData,
  heartRate,
  stepsTaken,
  user,
  restingHeart
});

export default rootReducer;
