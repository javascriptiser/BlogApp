import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";
import Profile from "./Profile";
import {setMyProfileThunkCreator} from "../../redux/reducers/profile-reducer";


class ProfileContainer extends React.Component {


    componentDidMount() {
        this.props.setMyProfileThunkCreator(this.props.currentUser.idUser);
    }


    render() {
        return (
            <Profile myProfile={this.props.myProfile}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        myProfile: state.Profile.myProfile,
        currentUser: state.Auth.currentUser
    }
}
export default compose(
    connect(mapStateToProps, {setMyProfileThunkCreator}),
    withAuthRedirect
)
(ProfileContainer)
