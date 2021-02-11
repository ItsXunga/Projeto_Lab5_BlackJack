import authReducer from './authReducer'
import statsReducer from './statsReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    stats: statsReducer,
    firebase: firebaseReducer,
});

export default rootReducer