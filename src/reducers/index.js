import { combineReducers } from 'redux';
import EquationsReducer from './equations';

const rootReducer = combineReducers({
  equations: EquationsReducer
});

export default rootReducer;