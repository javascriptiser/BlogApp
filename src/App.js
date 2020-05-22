import React from 'react';
import {Route} from "react-router";
import LoginContainer from "./Components/Auth/Login/LoginContainer";
import MainContainer from "./Components/Main/MainContainer";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/reducers/auth-reducer";
import Registery from "./Components/Auth/Registery/Registery";
import SitePreview from "./Components/SitePreview/SitePreview";


let App = (props) => {
    return (
        <div>
            <Route path='/auth' render={() => <LoginContainer/>}/>
            <Route path='/registery' render={() => <Registery/>}/>
            <Route path='/Blog' render={() => <MainContainer/>}/>
            <Route path exact='/' render={() => <SitePreview/>}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {setCurrentUser})(App);
