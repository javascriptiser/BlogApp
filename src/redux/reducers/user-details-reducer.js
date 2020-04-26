const SET_USER_DETAILS = 'SET_USER_DETAILS'

let initialState = {
    userDetails:[]
}
const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS: {
            return {
                ...state,
                userDetails: action.userDetails

            }
        }
        default:
            return state
    }
}

export const setUserDetails = (userDetails) => {
    return {
        type: SET_USER_DETAILS,
        userDetails
    }
}
export default userDetailsReducer;