import React from "react";
import {NavLink} from "react-router-dom";
import s from "./PostsCotroll.module.css"
import {connect} from "react-redux";
import {deletePostThunkCreator} from "../../../redux/reducers/posts-reducer";


let deleteSubmit = (idPost, idUser, props) => {
    props.deletePostThunkCreator(idPost, idUser)
}

let PostControll = (props) => {
    return <div className={s.PostCotrollWrapper}>
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">TITLE</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELETE</th>
            </tr>
            </thead>
            <tbody>
            {props.posts.map(p => {
                return <tr className={s.MyPostsControllItem}>
                    <td>{p.idPost}</td>
                    <td>{p.Title}</td>
                    <td><NavLink to={`/Blog/MyPosts/Edit/${p.idPost}`}>EDIT</NavLink></td>
                    <td>
                        <a href="#s" onClick={() => {
                            deleteSubmit(p.idPost, props.idUser, props)
                        }}>DELETE</a>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}
let mapStateToProps = (state) => {
    return {
        idUser: state.Auth.currentUser.idUser
    }
}

export default connect(mapStateToProps, {deletePostThunkCreator})(PostControll);