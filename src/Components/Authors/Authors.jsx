import React from "react";
import s from "./Authors.module.css"

let Authors = (props) => {

    let pageCount = Math.ceil(props.authorsCount / props.authorsOnPage);
    let paginator = []
    for (let i = 1; i <= pageCount; i++) {
        paginator[i] = i;
    }
    let pageChange = (currentPage) => {
        props.changeAuthorsPageThunkCreator(currentPage,props.authorsOnPage)
    }
    return (
        <div className={s.PostsWrapper}>
            <div className={s.PostContainer}>
                {props.authors.map(p => {
                    return <div className={s.PostItem} key={p.idPost}>
                        <div>
                            Фамилия : {p.LastName}
                        </div>
                        <div>
                            Имя : {p.FirstName}
                        </div>
                        <div>
                            Email : {p.Email}
                        </div>
                        <div>
                            Логин : {p.Login}
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


export default Authors;