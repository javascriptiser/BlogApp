import React from "react";
import s from "./Main.module.css"
import HeaderContainer from "../Header/HeaderContainer";
import NavBarContainer from "../NavBar/NavBarContainer";
import {Redirect, Route} from "react-router";
import PostsContainer from "../Posts/PostsContainer";
import FooterContainer from "../Footer/FooterContainer";
import MyPostsContainer from "../Posts/MyPost/MyPostsContainer";


let Main = (props) => {
    return (
        <div className={s.MainWrapper}>
            <div className={s.HeaderWrapper}>
                <HeaderContainer/>
            </div>
            <div className={s.NavBarWrapper}>
                <NavBarContainer/>
            </div>
            <div className={s.ContentWrapper}>
                <Route path="/Profile/Posts" render={() => <PostsContainer/>}/>
                <Route path="/Profile/MyPosts"
                       render={() => props.currentIdUser ?
                           <MyPostsContainer/> : <Redirect to='/auth'/>}/>
            </div>
            <div className={s.FooterWrapper}>
                <FooterContainer/>
            </div>
        </div>
    )
}


export default Main;