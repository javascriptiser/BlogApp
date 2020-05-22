import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";
import Profile from "./Profile";
import {editUserThunkCreator, setMyProfileThunkCreator} from "../../redux/reducers/profile-reducer";
import {Route, withRouter} from "react-router";
import ProfileEditForm from "./ProfileEditForm";


class ProfileContainer extends React.Component {


    componentDidMount() {
        this.props.setMyProfileThunkCreator(this.props.currentUser.idUser);
    }

    onSubmit(formData) {
        this.props.editUserThunkCreator(this.props.myProfile.idUser, formData.fname, formData.lname, formData.email, formData.login, formData.pass)
        this.props.history.push("/Blog/Profile")
    }

    render() {
        return <div>
            <Route exact path={"/Blog/Profile"} render={() => {
                return <Profile myProfile={this.props.myProfile}
                />;
            }}/>
            <Route exact path={"/Blog/Profile/Edit"} render={() => {
                return <ProfileEditForm onSubmit={this.onSubmit.bind(this)}/>

            }}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        myProfile: state.Profile.myProfile,
        currentUser: state.Auth.currentUser
    }
}
export default compose(
    connect(mapStateToProps, {setMyProfileThunkCreator, editUserThunkCreator}),
    withAuthRedirect,
    withRouter
)
(ProfileContainer)
