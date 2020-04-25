import {setPageAC, showPostsAC} from "../../redux/reducers/posts-reducer";
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)