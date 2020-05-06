import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth-reducer";
import postsReducer from "./reducers/posts-reducer";


let reducers = combineReducers({
    Auth : authReducer,
    Posts: postsReducer
});

let store = createStore(reducers)

window.store = store;

export default store;