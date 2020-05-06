import React from "react";
import MyPosts from "./MyPosts";
import {setCurrentUser} from "../../../redux/reducers/auth-reducer";
class MyPostsContainer extends React.Component {


    componentDidMount() {
    }


    render() {
        return (
            <MyPosts/>
        )
    }
}

let mapStateToProps = (state) => {
    return {}
}

export default MyPostsContainer;
