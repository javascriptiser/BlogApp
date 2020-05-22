import React from "react";
import {NavLink} from "react-router-dom";


let Profile = (props) => {
    return <div>
        <div>Идентификатор : {props.myProfile.idUser}</div>
        <div>Имя : {props.myProfile.FirstName}</div>
        <div>Фамилия : {props.myProfile.LastName}</div>
        <div>Почта : {props.myProfile.Email}</div>
        <div>Логин : {props.myProfile.Login}</div>
        <div>Пароль : {props.myProfile.Password}</div>
        <NavLink to={"/Blog/Profile/Edit"} className={"btn btn-primary"}>Изменить</NavLink>
    </div>
}


export default Profile;