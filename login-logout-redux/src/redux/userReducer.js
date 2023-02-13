//Login
export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return { isLoggedIn: true, userInfo: action.payload }
        case 'USER_LOGOUT':
            return { isLoggedIn: false }
        default:
            return state;
    }
}