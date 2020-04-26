import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './posts.module.css'

let Posts = (props) => {
    let pagesCount = Math.ceil(props.totalPostsCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.appWrapper}>
            {
                props.posts.map(p => <div className={styles.postsContainer} key={p.idPost}> {
                    <div className={styles.postsItem}>
                        <h1 className={styles.postTitle}>{p.Title}</h1>
                        <h4>Дата создания : {p.DateCreated}</h4>
                        <div className={styles.postContent}>
                            {p.Content}
                            <div>
                                <button onClick={() => {
                                    props.onPostDelete(p.idPost)
                                }}>DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                }</div>)
            }
            <div className={styles.pageContainer}>
                {
                    pages.map(p => {
                        return <span key={p} className={props.currentPage === p ? styles.selectedPage : ""}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Posts