import { combineReducers } from 'redux';
import EquationsReducer from './equations';
import ScoreReducer from './score';

const rootReducer = combineReducers({
  equations: EquationsReducer,
  score: ScoreReducer
});

export default rootReducer;