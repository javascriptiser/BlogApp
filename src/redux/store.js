import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth-reducer";


let reducers = combineReducers({
    Auth : authReducer
});

let store = createStore(reducers)

window.store = store;

export default store;