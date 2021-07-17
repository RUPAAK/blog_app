import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstants'

export const userLoginAction= (email, password)=>async (dispatch)=>{
    try {
        dispatch{type: USER_LOGIN_REQUEST}
        // const {data}= await 
    } catch (error) {
        
    }
}