import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL
} from '../constants/userConstants'

export const userLoginReducer= (state={}, action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true, state}
        case USER_LOGIN_SUCCESS: 
            return {loading: false, userDetails: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: acitonl.error}
        default:
            return state;
    }
}