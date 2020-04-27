const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {

}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:{
            return {
                ...state,
                authData: action.authData
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
export const setAuthData = (authData)=>{
    return{
        type:SET_AUTH_DATA,
        authData
    }

}
export default authReducer