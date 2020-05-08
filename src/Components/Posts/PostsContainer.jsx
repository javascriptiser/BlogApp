import React from "react";
import Posts from "./Posts";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {
    getPostsThunkCreator,
    postsPageChangeThunkCreator
} from "../../redux/reducers/posts-reducer";

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.getPostsThunkCreator(this.props.currentPage, this.props.postsOnPage)
    }

    render() {
        return (
            <Posts
                posts={this.props.posts}
                postsCount={this.props.postsCount}
                currentPage={this.props.currentPage}
                postsOnPage={this.props.postsOnPage}
                postsPageChangeThunkCreator={this.props.postsPageChangeThunkCreator}
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
        getPostsThunkCreator, postsPageChangeThunkCreator
    })(withRouterPostsContainer)
