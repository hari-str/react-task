import { applyMiddleware, combineReducers, createStore } from 'redux'
import { loginReducer } from './userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    userLogin: loginReducer
})

const userInfoLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoLocalStorage }
}

const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;