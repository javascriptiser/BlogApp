import React from "react";
import {connect} from "react-redux";
import MyPostsDetail from "./MyPostEdit";
import {withRouter} from "react-router";
import {getPostByIdThunkCreator} from "../../../redux/reducers/posts-reducer";


class MyPostEditContainer extends React.Component {
    componentDidMount() {
        ////POST DETAILS BY ID this.props.match.params.id
        this.props.getPostByIdThunkCreator(this.props.match.params.id)
    }

    render() {
        return (
            <MyPostsDetail/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        editPost: state.Posts.editPost
    }
}
let MyPostDetailsContainerWithRouter = withRouter(MyPostEditContainer)
export default connect(mapStateToProps, {getPostByIdThunkCreator})(MyPostDetailsContainerWithRouter);
