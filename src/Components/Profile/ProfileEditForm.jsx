import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import s from "./ProfileEditForm.module.css"


class ProfileEditForm extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.initialized != prevProps.initialized) {
            this.props.initialize(
                {
                    fname: this.props.myProfile.FirstName,
                    lname: this.props.myProfile.LastName,
                    email: this.props.myProfile.Email,
                    login: this.props.myProfile.Login,
                    pass: this.props.myProfile.Password
                })
        }
    }

    render() {
        return <form>
            <form onSubmit={this.props.handleSubmit}>
                <div>Имя</div>
                <div>
                    <Field name={"fname"} className={"form-control"} component={"input"}/>
                </div>
                <div>Фамилия</div>
                <div>
                    <Field name={"lname"} className={"form-control"} component={"input"}/>
                </div>
                <div>Почта</div>
                <div className={s.emailDiv}>
                    <Field name={"email"} className={"form-control"} component={"input"}/>
                </div>
                <div>Логин</div>
                <div>
                    <Field name={"login"} className={"form-control"} component={"input"}/>
                </div>
                <div>Пароль</div>
                <div>
                    <Field name={"pass"} className={"form-control"} component={"input"}/>
                </div>
                <br/>
                <div>
                    <button className={"btn btn-primary"}>Готово</button>
                </div>
            </form>
        </form>
    }
}

let mapStateToPropsEditProfileForm = (state) => {
    return {
        myProfile: state.Profile.myProfile
    }
}

export default connect(mapStateToPropsEditProfileForm)(reduxForm({
    form: 'editProfile',
    initialValues: {title: 'asd'},
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(ProfileEditForm))

