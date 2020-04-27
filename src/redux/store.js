import {combineReducers, createStore} from "redux";
import postsReducer from "./reducers/posts-reducer";
import usersReducer from "./reducers/users-reducer"
import userDetailsReducer from "./reducers/user-details-reducer";
import authReducer from "./reducers/auth-reducer";


let reducers = combineReducers({
    PostsPage: postsReducer,
    UsersPage: usersReducer,
    UserDetailsPage: userDetailsReducer,
    Auth : authReducer
});

let store = createStore(reducers)

window.store = store;

export default store;