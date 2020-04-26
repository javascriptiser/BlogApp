import React from "react";
import PreLoader from "../../Common/Preloader/PreLoader";
import {NavLink} from "react-router-dom";


let UserDetails = (props) => {
    if (!props.userDetails.user) {
        return <PreLoader/>
    }
    debugger
    return <div>
        {
            props.userDetails.user.map(u => {
                return <div>
                    <div>{u.idUser} {u.LastName} {u.FirstName}</div>
                    <div>
                        {
                            u.posts.map(p => {
                                return <div>
                                    <NavLink to={`/posts/${p.idPost}`}>
                                        <div>{p.Title}</div>
                                    </NavLink>
                                </div>
                            })
                        }
                    </div>
                </div>
            })
        }

    </div>
}

export default UserDetails