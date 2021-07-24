import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { allBlogsReducer, blogDetailReducer } from './reducers/blogReducers'
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    allBlogs: allBlogsReducer,
    blogDetails: blogDetailReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})
const userFromStorage= localStorage.getItem('userDetails')? JSON.parse(localStorage.getItem('userDetails')): null

const initialState = {
    userLogin: {
        useDetails: userFromStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store