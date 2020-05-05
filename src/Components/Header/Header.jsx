import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


let Header = (props) => {
    return (
        <div className={s.HeaderWrapper}>
            <div className={s.ProfilePage}>
                <NavLink to="/Authors">Список авторов</NavLink>
            </div>
            <div className={s.PostsPage}>
                <NavLink to="/Posts/">Посты</NavLink>
            </div>
        </div>
    )
}


export default Header;