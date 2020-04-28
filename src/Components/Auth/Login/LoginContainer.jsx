import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthData, setCurrentUser, setErrorText} from "../../../redux/reducers/auth-reducer";
import {withRouter} from "react-router";
import PreLoader from "../../Common/Preloader/PreLoader";


const querystring = require('querystring');

class LoginContainer extends React.Component {
// возвращает куки с указанным name,
// или undefined, если ничего не найдено
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        let login = this.getCookie('login')
        let password = this.getCookie('password')
        if (login && password) {
            this.props.setAuthData({login, password})
        }
    }

    onSubmit = (bodyParams) => {
        let str = querystring.stringify(bodyParams);
        let that = this;
        axios({
            method: 'post',
            url: 'http://api.com:4000/api/auth',
            data: str,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
            if (response.data.error === 0) {
                that.props.history.push(`/auth/me`)
                that.props.setErrorText('')
            }
            if (response.data.error === 1) {
                that.props.setErrorText('AUTH ERROR')
            }
        });
    }

    render() {
        return <div>{
            <Login authData={this.props.authData}
                   onSubmit={this.onSubmit}
                   currentUser={this.props.currentUser}
                   errorText={this.props.errorText}
            />
        }</div>
    }
}

let mapStateToProps = (state) => {
    return {
        authData: state.Auth.authData,
        currentUser: state.Auth.currentUser,
        errorText: state.Auth.errorText
    }
}
let withRouterLoginContainer = withRouter(LoginContainer)
export default connect(mapStateToProps,
    {
        setAuthData, setCurrentUser, setErrorText
    })(withRouterLoginContainer)