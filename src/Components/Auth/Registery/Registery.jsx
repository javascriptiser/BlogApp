import React from "react";
import ProfileEditForm from "../../Profile/ProfileEditForm";
import s from "./Registery.module.css"
import {connect} from "react-redux";
import {registeryThunkCreator} from "../../../redux/reducers/auth-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";

let Registery = (props) => {
    let onSubmit = (formData) => {
        props.registeryThunkCreator(formData.fname, formData.lname, formData.email, formData.login, formData.pass, props)
    }

    return <div className={s.registeryWrapper}>
        <ProfileEditForm onSubmit={onSubmit}/>
    </div>
}

export default compose(
    connect(null, {registeryThunkCreator}),
    withRouter
)
(Registery)