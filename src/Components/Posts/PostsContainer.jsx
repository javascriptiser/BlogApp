import React from "react";
import Posts from "./Posts";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {setPosts} from "../../redux/reducers/posts-reducer";


class PostsContainer extends React.Component {


    componentDidMount() {

    }


    render() {
        return (
            <Posts
                posts={this.props.posts}
                postsCount={this.props.postsCount}
                currentPage={this.props.currentPage}
                postsOnPage={this.props.postsOnPage}
                setPosts={this.props.setPosts}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.Posts.posts,
        postsCount: state.Posts.postsCount,
        currentPage: state.Posts.currentPage,
        postsOnPage: state.Posts.postsOnPage
    }
}
let withRouterPostsContainer = withRouter(PostsContainer)
export default connect(mapStateToProps,
    {
        setPosts
    })(withRouterPostsContainer)
