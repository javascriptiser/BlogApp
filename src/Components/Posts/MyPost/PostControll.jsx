import React from "react";
import {NavLink} from "react-router-dom";
import s from "./PostsCotroll.module.css"

let PostControll = (props) => {
    return <div className={s.PostCotrollWrapper}>
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">TITLE</th>
                <th scope="col">EDIT</th>
            </tr>
            </thead>
            <tbody>
            {props.posts.map(p => {
                return <tr className={s.MyPostsControllItem}>
                    <td>{p.idPost}</td>
                    <td>{p.Title}</td>
                    <td><NavLink to={`/Blog/MyPosts/Edit/${p.idPost}`}>EDIT</NavLink></td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}


export default PostControll;