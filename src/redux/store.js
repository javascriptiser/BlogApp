import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth-reducer";
import postsReducer from "./reducers/posts-reducer";
import authorsReducer from "./reducers/authors-reducer";
import profileReducer from "./reducers/profile-reducer";
import {reducer as formReducer} from "redux-form"
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    Auth: authReducer,
    Posts: postsReducer,
    Authors: authorsReducer,
    Profile: profileReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;