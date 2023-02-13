import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userAction'

const Home = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className='home'>
            <div>
                <h1>Welcome to Home</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )
}

export default Home