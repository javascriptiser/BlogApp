import React from "react";
import {NavLink} from "react-router-dom";


let PostControll = (props) => {
  return (
      <div>
          {props.posts.map(p=>{
              return <div>
                  <NavLink to={`/Profile/MyPosts/${p.idPost}`}>{p.Title}</NavLink>
                  <br/>
              </div>
          })}
      </div>
  );
}


export default PostControll;