import React from "react";
import {NavLink} from "react-router-dom";

let Navbar = (props) => {

    return <div>
        <NavLink to={"/users"}>
            <div>USERS</div>
        </NavLink>
        <NavLink to={"/posts"}>
            <div>POSTS</div>
        </NavLink>
    </div>
}




export default Navbar