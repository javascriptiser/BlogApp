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
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page)
        axios.get(`http://localhost:4000/api/posts?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.showPosts(response.data.results)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalPostsCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p && styles.selectedPage}
                                         onClick={() => {
                                             this.onPageChanged(p)
                                         }}>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.posts.map(p => <div key={p.idPost}> {
                        <div className={"wrapper"}>
                            <div>
                                <h1>{p.Title}</h1>
                                <h4>Дата создания : {p.DateCreated}</h4>
                            </div>
                        </div>
                    }</div>)
                }
            </div>
        )
    }
}

export default Posts