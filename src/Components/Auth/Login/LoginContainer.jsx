import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import * as axios from "axios";
import qs from 'qs';
import {setAuthData} from "../../../redux/reducers/auth-reducer";

class LoginContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:4000/api/auth`)
            .then(response => {
                this.props.setAuthData(response.data)
                debugger
            })
    }

    onSubmit = (login, password) => {
        const data = {
            login: login,
            password: password
        }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify(data),
            url: `http://localhost:4000/api/auth/`
        };
        axios(options)
            .then(response => {
                this.props.setAuthData(response.data)
                debugger
            })
    }

    render() {
        return <div>{
            <Login authData={this.props.authData}
                   onSumbit={this.onSubmit}
            />
        }</div>
    }
}

let mapStateToProps = (state) => {
    return {
        authData: state.Auth.authData
    }
}
export default connect(mapStateToProps, {setAuthData})(LoginContainer)