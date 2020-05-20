import React from "react";
import s from "./MyPosts.module.css"
import PostControll from "./PostControll";
import MyPostDetailsContainer from "./MyPostDetailsContainer";
import {Route} from "react-router";


let MyPosts = (props) => {
    return <div>
        <Route path="/MyPosts/:id" render={() => <MyPostDetailsContainer/>}/>
        <Route exact path="/MyPosts" render={() => <div>
            <div className={s.PostsWrapper}>
                MY POSTS TITLE :
            </div>
            <div>
                {!!props.myPosts
                    ? <PostControll posts={props.myPosts}/>
                    : 'Постов нет'}
            </div>
        </div>}/>
    </div>
}


export default MyPosts;