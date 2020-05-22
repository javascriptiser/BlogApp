import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {NavLink} from "react-router-dom";
import React from "react";
import s from "../Header/Header.module.css";

let LogAut = (props) => {
    return (
        <div className="dropdown show">
            <a className="btn btn-primary dropdown-toggle" href="#s" role="button" id="dropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.userLoginText}
            </a>

            <div className={"dropdown-menu " + s.dropMenu} aria-labelledby="dropdownMenuLink">
                <NavLink to="/Blog/Profile" className={'dropdown-item-text ' + s.dropdownText}>Мой профиль</NavLink>
                <NavLink to="/Blog/MyPosts" className={'dropdown-item-text ' + s.dropdownText}>Мои посты</NavLink>
                <NavLink to="/" className={'dropdown-item-text ' + s.dropdownText}>Выйти</NavLink>
            </div>
        </div>
    )
}

export default LogAut