import React from 'react';
import {Redirect, Route} from "react-router";
import LoginContainer from "./Components/Auth/Login/LoginContainer";
import MainContainer from "./Components/Main/MainContainer";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/reducers/auth-reducer";

let getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        // eslint-disable-next-line no-useless-escape
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let App = (props) => {

    let authorizedIdUser = getCookie('authorizedIdUser')
    setCurrentUser(authorizedIdUser);
    return (
        <div>
            <Route path='/' render={() => authorizedIdUser ? <Redirect to='/Profile'/> : <Redirect to='/auth'/>}/>
            <Route path='/auth' render={() => <LoginContainer/>}/>
            <Route path='/Profile' render={() => <MainContainer/>}/>
        </div>
    );
}

let mapStateToProps = (state)=>{
    return {

    }
}
export default connect(mapStateToProps,{setCurrentUser})(App);
