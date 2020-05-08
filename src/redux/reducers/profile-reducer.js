import {profileAPI} from "../../Api/Api";

const SET_MY_POSTS = 'SET_MY_POSTS'

let initialState = {
    myPosts:[]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_POSTS: {
            return {
                ...state,
                myPosts: action.myPosts
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setMyPosts = (myPosts) => {
    return {
        type: SET_MY_POSTS,
        myPosts
    }
}

export const setPostsThunkCreator = (idUser) =>{
    return (dispatch)=>{
        profileAPI.getAllMyPosts(idUser)
            .then(response => {
              dispatch(setMyPosts(response.posts))
            })
    }
}

export default profileReducer