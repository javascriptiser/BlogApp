import React from "react";
import {connect} from "react-redux";
import MyPostsDetail from "./MyPostDetails";
import {withRouter} from "react-router";

class MyPostDetailsContainer extends React.Component {


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
let MyPostDetailsContainerWithRouter = withRouter(MyPostDetailsContainer)
export default connect(mapStateToProps, {})(MyPostDetailsContainerWithRouter);
