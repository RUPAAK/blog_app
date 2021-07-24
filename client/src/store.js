import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { allBlogsReducer, blogDetailReducer } from './reducers/blogReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    allBlogs: allBlogsReducer,
    blogDetails: blogDetailReducer,
    userLogin: userLoginReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store