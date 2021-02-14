const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCESS':
            console.log('login sucess');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCESS':
            console.log('signout sucess');
            return state;
        case 'SIGNUP_SUCESS':
            console.log('signup sucess');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup failed');
            return {
                ...state,
                authError: action.err.message
            }
        default:
        return state
    }
} 


export default authReducer