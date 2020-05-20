import React from "react";
import s from "./Main.module.css"
import HeaderContainer from "../Header/HeaderContainer";
import NavBarContainer from "../NavBar/NavBarContainer";
import {Route} from "react-router";
import PostsContainer from "../Posts/PostsContainer";
import FooterContainer from "../Footer/FooterContainer";
import MyPostsContainer from "../Posts/MyPost/MyPostsContainer";
import AuthorsContainer from "../Authors/AuthorsContainer";
import ProfileContainer from "../Profile/ProfileContainer";


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
                <Route path="/Blog/Authors" render={() => <AuthorsContainer/>}/>
                <Route path="/Blog/MyPosts" render={() => <MyPostsContainer/>}/>
                <Route path="/Blog/Posts" render={() => <PostsContainer/>}/>
                <Route path="/Blog/Profile" render={() => <ProfileContainer/>}/>
            </div>
            <div className={s.FooterWrapper}>
                <FooterContainer/>
            </div>
        </div>
    )
}


export default Main;