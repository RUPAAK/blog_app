import {
    BLOGS_LIST_REQUEST, BLOGS_LIST_SUCCESS, BLOGS_LIST_FAIL,
    BLOG_DETAIL_REQUEST, BLOG_DETAIL_SUCCESS, BLOG_DETAIL_FAIL
} from '../constants/blogConstants'

export const allBlogsReducer= (state={}, action)=>{
    switch(action.type){
        case BLOGS_LIST_REQUEST:
            return {loading: true, state}
        case BLOGS_LIST_SUCCESS:
            return {loading: false, blogs: action.payload}
        case BLOGS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
export const blogDetailReducer= (state={}, action)=>{
    switch(action.type){
        case BLOG_DETAIL_REQUEST:
            return {loading: true, ...state}
        case BLOG_DETAIL_SUCCESS:
            return {loading: false, blog: action.payload}
        case BLOG_DETAIL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
