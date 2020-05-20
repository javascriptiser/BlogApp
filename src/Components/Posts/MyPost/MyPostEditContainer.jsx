import React from "react";
import {connect} from "react-redux";
import MyPostsDetail from "./MyPostEdit";
import {withRouter} from "react-router";

class MyPostEditContainer extends React.Component {


    componentDidMount() {
        ////POST DETAILS BY ID this.props.match.params.id
    }


    render() {
    debugger
        return (
            <MyPostsDetail idPost = {this.props.match.params.id}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}
let MyPostDetailsContainerWithRouter = withRouter(MyPostEditContainer)
export default connect(mapStateToProps, {})(MyPostDetailsContainerWithRouter);
