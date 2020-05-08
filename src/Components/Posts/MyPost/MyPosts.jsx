import React from "react";
import s from "./MyPosts.module.css"
import PostControll from "./PostControll";
import MyPostDetailsContainer from "./MyPostDetailsContainer";
import {Route} from "react-router";


let MyPosts = (props) => {
    if (props.currentUser.hasOwnProperty('idUser')) {
        return <div>
            <Route path="/Profile/MyPosts/:id" render={() => <MyPostDetailsContainer/>}/>
            <Route exact path="/Profile/MyPosts" render={() => <div>
                <div className={s.PostsWrapper}>
                    MY POSTS TITLE :
                </div>
                <div>
                    {!!props.myPosts
                        ? <PostControll posts={props.myPosts}/>
                        : ''}
                </div>
            </div>}/>
        </div>
    } else {
        return (
            <div className={s.PostsWrapper}>
                U ARE NOT AUTHORIZED
            </div>
        )
    }
}


export default MyPosts;