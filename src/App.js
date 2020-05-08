import React from 'react';
import {Route} from "react-router";
import LoginContainer from "./Components/Auth/Login/LoginContainer";
import MainContainer from "./Components/Main/MainContainer";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/reducers/auth-reducer";


let App = (props) => {

    return (
        <div>
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
