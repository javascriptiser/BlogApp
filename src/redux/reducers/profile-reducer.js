import {profileAPI} from "../../Api/Api";

const SET_MY_POSTS = 'SET_MY_POSTS'
const SET_MY_PROFILE = 'SET_MY_PROFILE'

let initialState = {
    myPosts:[],
    myProfile:{}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_POSTS: {
            return {
                ...state,
                myPosts: action.myPosts
            }
        }
        case SET_MY_PROFILE: {
            return {
                ...state,
                myProfile: action.myProfile
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
export const setMyProfile = (myProfile) => {
    return {
        type: SET_MY_PROFILE,
        myProfile
    }
}

export const setPostsThunkCreator = (idUser) =>{
    return (dispatch)=>{
        profileAPI.getAllMyPosts(idUser)
            .then(response => {
              dispatch(setMyPosts(response))
            })
    }
}
export const setMyProfileThunkCreator = (idUser) =>{
    return (dispatch)=>{
        profileAPI.getMyProfile(idUser)
            .then(response => {
              dispatch(setMyProfile(response))
            })
    }
}

export default profileReducer