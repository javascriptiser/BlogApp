import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

let NavBar = (props) =>{
    return <div className={s.NavBarWrapper}>{
        <nav>
            <div>
                <NavLink to="/Profile/Me">Мой профиль</NavLink>
            </div>
            <div>
                <NavLink to="/Profile/MyPosts">Мои посты</NavLink>
            </div>
        </nav>
    }</div>
}


export default NavBar;