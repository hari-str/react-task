import axios from "axios"

//Login
export const login = (username, password) => async (dispatch) => {
    try {
        const { data } = await axios.post('https://reqres.in/api/login', { username, password })
        dispatch({ type: 'USER_LOGIN', payload: data })
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        console.log(error)
        alert(error.response.data.error)
    }
}

//Logout
export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({ type: 'USER_LOGOUT' })
}