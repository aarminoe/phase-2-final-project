import React, { useState } from "react";

function Login({ artList }) {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function handleUser(e) {
        console.log(e.target.value)
    }

    function handlePassword(e) {
        console.log(e.target.value)
    }

    function handleLoginSubmit() {
        console.log('hi')
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <p>Username</p>
            <input
            onChange={handleUser} 
            value={user}
            type='text'>
            </input>
            <p>Password:</p>
            <input
            onChange={handlePassword}
            value={password} 
            type='text'>
            </input>
        </form>
    )
}

export default Login