import {showPostsAC} from "../../redux/reducers/posts-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        posts: state.PostsPage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showPosts: (posts) => {
            dispatch(showPostsAC(posts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)