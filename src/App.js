import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PostContainer from "./Components/Posts/PostsContainer";
import Navbar from "./Components/Navbar/Navbar";

let App = () => {
    return (
        <div>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/posts" render={() => <PostContainer/>}/>
            </div>
        </div>
    );
}

export default App;
