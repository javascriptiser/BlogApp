import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {
    changeLoginText,
    changePasswordText, changeRememberMeRadioButton, logInThunkCreator,
    setCurrentUser,
    setErrorText
} from "../../../redux/reducers/auth-reducer";
import {withRouter} from "react-router";

class LoginContainer extends React.Component {

    onSubmit = (bodyParams) => {
        this.props.logInThunkCreator(bodyParams, this)
    }

    render() {
        return <div>{
            <Login onSubmit={this.onSubmit}
                   errorText={this.props.errorText}
                   loginText={this.props.loginText}
                   passwordText={this.props.passwordText}
                   rememberMeRadioButton={this.props.rememberMeRadioButton}
                   changeLoginText={this.props.changeLoginText}
                   changePasswordText={this.props.changePasswordText}
                   changeRememberMeRadioButton={this.props.changeRememberMeRadioButton}
            />
        }</div>
    }
}

let mapStateToProps = (state) => {
    return {
        currentUser: state.Auth.currentUser,
        errorText: state.Auth.errorText,
        loginText: state.Auth.loginText,
        passwordText: state.Auth.passwordText,
        rememberMeRadioButton: state.Auth.rememberMeRadioButton
    }
}
let withRouterLoginContainer = withRouter(LoginContainer)
export default connect(mapStateToProps,
    {
        setCurrentUser, setErrorText,
        changeLoginText, changePasswordText, changeRememberMeRadioButton,
        logInThunkCreator
    })(withRouterLoginContainer)