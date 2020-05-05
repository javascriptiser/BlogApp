import React from 'react';
import s from './app.module.css';
import {Route} from "react-router";
import LoginContainer from "./Components/Auth/Login/LoginContainer";
//import s from "./Components/Main/Main.module.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import PostsContainer from "./Components/Posts/PostsContainer";
import FooterContainer from "./Components/Footer/FooterContainer";


let App = () => {
    return (
        <div>
            <Route path="/auth" render={() => <LoginContainer/>}/>
            <div className={s.MainWrapper}>
                <div className={s.HeaderWrapper}>
                    <HeaderContainer/>
                </div>
                <div className={s.NavBarWrapper}>
                    <NavBarContainer/>
                </div>
                <div className={s.ContentWrapper}>
                    <Route path="/Posts" render={() => <PostsContainer/>}/>
                </div>
                <div className={s.FooterWrapper}>
                    <FooterContainer/>
                </div>
            </div>
        </div>
    );
}

export default App;
