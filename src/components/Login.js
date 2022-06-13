import React, { useState } from "react";

function Login({ artList, onLoggedIn, accounts }) {

    console.log(artList)

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [logInError, setLogInError] = useState(false)

    function handleUser(e) {
        setUser(e.target.value)
        console.log(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    function handleLoginSubmit(e) {
        e.preventDefault()
        console.log(password)
        console.log(user)
        const userArray = []
        const passArray = []
        accounts.forEach((artist) => {
            userArray.push(artist.name)
            passArray.push(artist.password)
        })
        console.log(passArray)
        console.log(userArray)
        if (userArray.includes(user) && passArray.includes(password)) {
            setLogInError(false)
            setLoggedIn(true)
            onLoggedIn(user)
        }
        else {
            setLogInError(true)
        }
    }


    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <p>Username:</p>
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
                <p></p>
                <button>Log In</button>
                <p></p>
                {loggedIn ? "You are Logged in, " + user : null}
                {logInError ? 'No User/Password found, Please try again or create a new account.' : null}
            </form>
        </div>
    )
}

export default Login