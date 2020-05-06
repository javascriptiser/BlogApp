import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {setCurrentUser} from "../../redux/reducers/auth-reducer";

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1,
        domain: 'api.com'
    })
}

let onExitClick = () => {
    deleteCookie('authorizedIdUser');
    setCurrentUser(undefined);
}
let Header = (props) => {
    return (
        <div className={s.HeaderWrapper}>
            <div className={s.ProfilePage}>
                <NavLink to="/Authors">Список авторов</NavLink>
            </div>
            <div className={s.PostsPage}>
                <NavLink to="/Posts">Посты</NavLink>
            </div>
            <div>
                <NavLink onClick={() => onExitClick} to="/auth">ВЫЙТИ</NavLink>
            </div>
        </div>
    )
}


export default Header;