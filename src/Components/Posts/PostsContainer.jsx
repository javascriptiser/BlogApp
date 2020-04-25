import {deletePostById, setPageAC, setTotalPostsCountAC, showPostsAC} from "../../redux/reducers/posts-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        posts: state.PostsPage.posts,
        pageSize: state.PostsPage.pageSize,
        totalPostsCount: state.PostsPage.totalPostsCount,
        currentPage: state.PostsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showPosts: (posts) => {
            dispatch(showPostsAC(posts))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setTotalPostsCount: (count) => {
            dispatch(setTotalPostsCountAC(count))
        },
        deletePostById: (id) => {
            dispatch(deletePostById(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)