import axios from '../axios'

import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstants'

export const userLoginAction= (email, password)=>async (dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const {data}= await axios.post(`/users/register`, {email, password})
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispathh({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message? error.response.data.message : error.response
        })
    }
}

