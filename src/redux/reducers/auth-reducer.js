const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

let initialState = {
    authData: {},
    currentUser:1
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                authData: action.authData
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.currentUser
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
export const setAuthData = (authData) => {
    return {
        type: SET_AUTH_DATA,
        authData
    }
}
export const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        currentUser
    }
}
export default authReducer