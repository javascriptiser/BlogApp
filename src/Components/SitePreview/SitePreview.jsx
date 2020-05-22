import React from "react";
import s from "./SitePreview.module.css"
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/reducers/auth-reducer";
import {compose} from "redux";

let SitePreview = (props) => {

    let onSignInClick = () => {
        props.history.push("/auth")
    }
    let onSignUpClick = () => {
        props.history.push("/Registery")
    }
    let onIncognitoClick = () => {
        props.setCurrentUser({idUser: 1, login: '', isAuth: false})
        props.history.push("/Blog/Posts")
    }
    return <div className={s.PreviewWrapper}>
        <div className={s.Item}>
            <div className={s.signIn} onClick={() => onSignInClick()}>
                <p></p>
            </div>
        </div>
        <div className={s.Item}>
            <div className={s.signUp} onClick={() => onSignUpClick()}>
                <p></p>
            </div>
        </div>
        <div className={s.Item}>
            <div className={s.Incognito} onClick={() => onIncognitoClick()}>
                <p></p>
            </div>
        </div>
    </div>
}

export default compose(
    connect(null, {setCurrentUser}),
    withRouter
)
(SitePreview)