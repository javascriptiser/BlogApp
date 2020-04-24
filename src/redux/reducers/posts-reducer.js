const SHOW_POSTS = 'SHOW_POSTS'

let initialState = {
    posts: []
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POSTS: {
            return {
                ...state,
                posts: [...action.posts]
            }
        }
        default:
            return state
    }
}

export const showPostsAC = (posts) => {
    return {
        type: SHOW_POSTS,
        posts: posts
    }
}



export default postsReducer;