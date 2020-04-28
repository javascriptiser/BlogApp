import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthData, setCurrentUser} from "../../../redux/reducers/auth-reducer";
import UserDetails from "../../Users/UserDetails/UserDetails";
import {withRouter} from "react-router";
import {Redirect} from 'react-router-dom'

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

            that.props.history.push(`/user/${response.data.currentUser[0].idUser}`)
            debugger
        });
    }

    render() {
        return <div>{
            <Login authData={this.props.authData}
                   onSubmit={this.onSubmit}
                   currentUser={this.props.currentUser}
            />
        }</div>
    }
}

let mapStateToProps = (state) => {
    return {
        authData: state.Auth.authData,
        currentUser: state.Auth.currentUser
    }
}
let withRouterLoginContainer = withRouter(LoginContainer)
export default connect(mapStateToProps, {setAuthData, setCurrentUser})(withRouterLoginContainer)