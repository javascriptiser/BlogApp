import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {setPostsThunkCreator} from "../../../redux/reducers/profile-reducer";


class MyPostsContainer extends React.Component {


    componentDidMount() {
        if (!!this.props.currentUser.idUser) {
            this.props.setPostsThunkCreator(this.props.currentUser.idUser);
        }
    }


    render() {
        return (
            <MyPosts currentUser={this.props.currentUser}
                     myPosts={this.props.myPosts}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentUser: state.Auth.currentUser,
        myPosts : state.Profile.myPosts
    }
}

export default connect(mapStateToProps, {setPostsThunkCreator})(MyPostsContainer);
