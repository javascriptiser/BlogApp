import React from "react";
import s from "./Posts.module.css"

let Posts = (props) => {

    let pageCount = Math.ceil(props.postsCount / props.postsOnPage);
    let paginator = []
    for (let i = 1; i <= pageCount; i++) {
        paginator[i] = i;
    }

    let pageChange = (currentPage) => {
        props.postsPageChangeThunkCreator(currentPage,props.postsOnPage)
    }

    return (
        <div className={s.PostsWrapper}>
            <div className={s.PostContainer}>
                {props.posts.map(p => {
                    return <div className={s.PostItem} key={p.idPost}>
                        <div className={s.Title}>
                            <h3>{p.Title}</h3>
                        </div>
                        <div className={s.Content}>
                            {p.Content}
                        </div>
                        <div className={s.Author}>
                            Автор : {p.Firstname} {p.LastName}
                        </div>
                    </div>
                })}
            </div>
            <div className={s.PaginatorContainer}>
                {
                    paginator.map(p => {
                        return <span className={p === props.currentPage ? s.PaginatorActiveItem : ''}
                                    onClick={() => pageChange(p)} key={p}>
                            {p}
                        </span>
                    })
                }
            </div>
        </div>
    )
}


export default Posts;