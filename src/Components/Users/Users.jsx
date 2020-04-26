import React from "react";
import PreLoader from "../Common/Preloader/PreLoader";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    if (!props.users.user) {
        return <PreLoader/>
    }
    return <div>
        {
            props.users.user.map(u => {
                return <div>
                    <NavLink to={"/user/" + u.idUser}>
                        <div>[{u.LastName} {u.FirstName}] </div>
                    </NavLink>
                </div>
            })
        }

    </div>
}

export default Users