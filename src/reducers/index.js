import { combineReducers } from 'redux';
import savingsReducer from './savingsReducer';
import billsReducer from './billsReducer';

export default combineReducers({
    savingsReducer,
    billsReducer
});