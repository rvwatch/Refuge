import { combineReducers } from 'redux';
import fitbitData from './fitbitDataReducer';
import heartRate from './heartRateReducer';
import stepsTaken from './stepsTakenReducer';

const rootReducer = combineReducers({
  fitbitData,
  heartRate,
  stepsTaken
});

export default rootReducer;
