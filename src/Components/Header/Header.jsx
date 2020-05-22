import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import LogAut from "../Auth/LogAut";

let Header = (props) => {
    return (
        <div className={s.HeaderWrapper}>
            <div className={s.HeaderNavContainer}>
                <div>
                    <NavLink to="/Blog/Authors" className={'btn btn-primary '+s.Authors}>Список авторов</NavLink>
                </div>
                <div className={s.PostsPage}>
                    <NavLink to="/Blog/Posts" className={'btn btn-primary'}>Посты</NavLink>
                </div>
            </div>
            <div className={s.userLoginTextContainer}>
                <div className={s.userLoginText}>
                    {props.userLoginText ? <LogAut userLoginText={props.userLoginText}/> : <NavLink to={"/"} className={'btn btn-primary'}>Войти</NavLink>}
                </div>
            </div>
        </div>
    )
}


export default Header;