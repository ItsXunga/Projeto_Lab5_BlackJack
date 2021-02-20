import authReducer from './authReducer'
import statsReducer from './statsReducer'
import { combineReducers } from 'redux'
import { firestoreReducer, firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    stats: statsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer