import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import LogAut from "../Auth/LogAut";

let Header = (props) => {
    return (
        <div className={s.HeaderWrapper}>
            <div className={s.HeaderNavContainer}>
                <div className={s.ProfilePage}>
                    <NavLink to="/Authors">Список авторов</NavLink>
                </div>
                <div className={s.PostsPage}>
                    <NavLink to="/Posts">Посты</NavLink>
                </div>
            </div>
            <div className={s.userLoginTextContainer}>
                <div className={s.userLoginText}>
                    {props.userLoginText ? <LogAut userLoginText={props.userLoginText}/> : 'unauthorized'}
                </div>
            </div>
        </div>
    )
}


export default Header;