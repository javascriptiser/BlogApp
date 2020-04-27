import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router";
import PostsContainer from "./Components/Posts/PostsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import UserDetailsContainer from "./Components/Users/UserDetails/UserDetailsContainer";
import LoginContainer from "./Components/Auth/Login/LoginContainer";


let App = () => {
    return (
        <div>
            {/*<Navbar/>*/}
            {/*<Route path="/posts" render={() => <PostsContainer/>}/>*/}
            {/*<Route path="/users" render={() => <UsersContainer/>}/>*/}
            {/*<Route path="/user/:idUser?" render={() => <UserDetailsContainer/>}/>*/}
            <LoginContainer/>
        </div>
    );
}

export default App;
