const SET_POSTS = 'SET_POSTS'
let initialState = {
    posts: [],
    postsCount: 10,
    currentPage: 1,
    postsOnPage: 3
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:{
            return {
                ...state,
                posts: action.posts
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
}
export default postsReducer