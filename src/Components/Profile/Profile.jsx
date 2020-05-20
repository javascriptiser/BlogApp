import React from "react";


let Profile = (props) => {
    return <div>
        <div> MY PROFILE : =></div>
        <div>ID : {props.myProfile.idUser}</div>
        <div>FIRST NAME : {props.myProfile.FirstName}</div>
        <div>LAST NAME : {props.myProfile.LastName}</div>
        <div>EMAIL : {props.myProfile.Email}</div>
        <div>LOGIN : {props.myProfile.Login}</div>
        <div>PASSWORD : {props.myProfile.Password}</div>
    </div>
}


export default Profile;