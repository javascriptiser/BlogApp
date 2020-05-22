import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

let NavBar = (props) =>{
    return <div className={s.NavBarWrapper}>{
        <nav>
            <div>
                <NavLink to="/Blog/Profile" className={'btn btn-primary btn-block'}>Мой профиль</NavLink>
            </div>
            <br/>
            <div>
                <NavLink to="/Blog/MyPosts" className={'btn btn-primary btn-block'}>Мои посты</NavLink>
            </div>
        </nav>
    }</div>
}


export default NavBar;