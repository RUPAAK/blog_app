import {
    BLOGS_LIST_REQUEST, BLOGS_LIST_SUCCESS, BLOGS_LIST_FAIL,
    BLOG_DETAIL_REQUEST, BLOG_DETAIL_SUCCESS, BLOG_DETAIL_FAIL
} from '../constants/blogConstants'
import axios from 'axios'

export const allBlogsAction = () => async (dispatch) => {
    try {
        dispatch({ type: BLOGS_LIST_REQUEST })
        const { data } = await axios.get('http://localhost:5000/api/blog/blogs')

        dispatch({
            type: BLOGS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BLOGS_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const blogDetailAction = (blogId) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAIL_REQUEST })
        const {data}= await axios.get(`http://localhost:5000/api/blog/${blogId}`)
        console.log(data)
        dispatch({
            type: BLOG_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}