import React from "react";
import s from "./MyPosts.module.css"
import PostControll from "./PostControll";
import MyPostEditContainer from "./MyPostEditContainer";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";
import MyPostNewContainer from "./MyPostNew";


let MyPosts = (props) => {
    return <div className={s.MyPostsContentWrapper}>
        <Route path="/Blog/MyPosts/Edit/:id" render={() => <MyPostEditContainer/>}/>
        <Route path="/Blog/MyPosts/New" render={() => <MyPostNewContainer/>}/>
        <Route exact path="/Blog/MyPosts" render={() => <div>
            <NavLink to={"/Blog/MyPosts/New"} className={'btn btn-primary'}>ADD NEW POST</NavLink>
            <div>
                {!!props.myPosts
                    ? <PostControll posts={props.myPosts}/>
                    : 'Постов нет'}
            </div>
        </div>}/>
    </div>
}


export default MyPosts;