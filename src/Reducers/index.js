import { combineReducers } from 'redux';
import fitbitData from './fitbitDataReducer';
import heartRate from './heartRateReducer';
import stepsTaken from './stepsTakenReducer';
import user from './addUserReducer';

const rootReducer = combineReducers({
  fitbitData,
  heartRate,
  stepsTaken,
  user
});

export default rootReducer;
