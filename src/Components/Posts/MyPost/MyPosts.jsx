import React from "react";
import s from "./MyPosts.module.css"
import PostControll from "./PostControll";
import MyPostEditContainer from "./MyPostEditContainer";
import {Route} from "react-router";


let MyPosts = (props) => {
    return <div className={s.MyPostsContentWrapper}>
        <Route path="/Blog/MyPosts/Edit/:id" render={() => <MyPostEditContainer/>}/>
        <Route exact path="/Blog/MyPosts" render={() => <div>
            <button>ADD NEW POST</button>
            <div>
                {!!props.myPosts
                    ? <PostControll posts={props.myPosts}/>
                    : 'Постов нет'}
            </div>
        </div>}/>
    </div>
}


export default MyPosts;