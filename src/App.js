import React from 'react';
import './App.css';
import {Route} from "react-router";
import LoginContainer from "./Components/Auth/Login/LoginContainer";
import PreLoader from "./Components/Common/Preloader/PreLoader";


let App = () => {
    return (
        <div>
            <Route path="/auth" render={() => <LoginContainer/>}/>
            <Route path="/auth/me" render={() => <PreLoader/>}/>

        </div>
    );
}

export default App;
