import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/userAction'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector((state) => state.userLogin)
    const { userInfo } = user

    const handleLogin = (e) => {
        e.preventDefault()
        if (userName === '' || password === '') {
            alert("Required Field!")
        } else {
            dispatch(login(userName, password))
        }
    }

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [userInfo, navigate])

    return (
        <div className='login__container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <label>Password:</label>

                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login