import {setPage, setTotalPostsCount, showPosts} from "../../redux/reducers/posts-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";
import * as React from "react";
import * as axios from "axios";


class PostsContainer extends React.Component {

    componentDidMount() {
       this.onPageShow(this.props.currentPage)
    }

    onPageShow = (currentPage) => {
        axios.get(`http://localhost:4000/api/posts?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.data.results !== undefined && response.data.results.length !== 0) {
                    this.props.showPosts(response.data.results)
                    this.props.setTotalPostsCount(response.data.length)
                } else {
                    this.onPageChanged(currentPage-1)
                    this.props.setTotalPostsCount(response.data.length)
                }
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page)
        axios.get(`http://localhost:4000/api/posts?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.showPosts(response.data.results)
            })
        window.scrollTo(0, 0)
    }

    onPostDelete = (id) => {
        axios.delete(`http://localhost:4000/api/posts/${id}`)
            .then(response => {
                this.onPageShow(this.props.currentPage)
            })
    }

    render() {
        return <>
            <Posts totalPostsCount={this.props.totalPostsCount}
                   pageSize={this.props.pageSize}
                   posts={this.props.posts}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onPostDelete={this.onPostDelete}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.PostsPage.posts,
        pageSize: state.PostsPage.pageSize,
        totalPostsCount: state.PostsPage.totalPostsCount,
        currentPage: state.PostsPage.currentPage
    }
}
export default connect(mapStateToProps,
    {
        showPosts,
        setPage,
        setTotalPostsCount
    })(PostsContainer)