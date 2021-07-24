import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL
} from '../constants/userConstants'
import axios from '../axios'

export const userLoginAction= (email, password)=>async (dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const {data}= await axios.post(`/users/login`, {email, password})
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userDetails', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message? error.response.data.message : error.response
        })
    }
}

export const userRegisterAction= (username, email, password)=>async (dispatch)=>{
    try {
        dispatch({type: USER_REGISTER_REQUEST})
        const {data}= await axios.post(`/users/register`, {username, email, password})
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        console.log(data)
        localStorage.setItem('userDetails', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message? error.response.data.message : error.response
        })
    }

}
