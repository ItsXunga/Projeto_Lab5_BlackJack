import authReducer from './authReducer'
import statsReducer from './statsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    stats: statsReducer,
});

export default rootReducer