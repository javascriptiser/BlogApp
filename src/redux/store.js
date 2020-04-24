import {combineReducers, createStore} from "redux";
import postsReducer from "./reducers/posts-reducer";


let reducers = combineReducers({
    PostsPage: postsReducer
});

let store = createStore(reducers)

window.store = store;

export default store;