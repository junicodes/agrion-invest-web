import authReducer from './auth';
import onSessionReducer from './onSession';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    authReducer, onSessionReducer
});

export default allReducer;