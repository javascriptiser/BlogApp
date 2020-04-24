import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <div><NavLink to="/posts">Posts</NavLink></div>
        </nav>
    )
}

export default Navbar;