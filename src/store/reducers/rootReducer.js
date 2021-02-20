import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer, firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer