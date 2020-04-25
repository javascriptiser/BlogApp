import * as React from "react";
import * as axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './posts.module.css'

class Posts extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:4000/api/posts?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.showPosts(response.data.results)
                this.props.setTotalPostsCount(response.data.length)
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

            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalPostsCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={styles.appWrapper}>
                {
                    this.props.posts.map(p => <div className={styles.postsContainer} key={p.idPost}> {
                        <div className={styles.postsItem}>
                            <h1 className={styles.postTitle}>{p.Title}</h1>
                            <h4>Дата создания : {p.DateCreated}</h4>
                            <div className={styles.postContent}>
                                {p.Content}
                                <div>
                                    <button onClick={()=>{this.onPostDelete(p.idPost)}}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    }</div>)
                }
                <div className={styles.pageContainer}>
                    {
                        pages.map(p => {
                            return <span key={p} className={this.props.currentPage === p ? styles.selectedPage : ""}
                                         onClick={() => {
                                             this.onPageChanged(p)
                                         }}>{p}</span>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Posts