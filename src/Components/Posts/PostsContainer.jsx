import React from "react";
import Content from "./Posts";

class PostsContainer extends React.Component {


    componentDidMount() {

    }


    render() {
        return (
            <Content/>
        )
    }
}

let mapStateToProps = (state) => {
    return {}
}

export default PostsContainer;
