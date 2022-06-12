import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

function CreateProfile({ onHandleNewUser }) {

    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [newBio, setNewBio] = useState('')
    const [successfulSignUp, setSuccessfulSignUp] = useState(false)

    function handleNewUserSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3001/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newUser,
                password: newPass,
                profilePic: profilePic,
                bio: newBio
            })
        })
        .then(resp => resp.json())
        .then(data => onHandleNewUser(data))
        setNewUser('')
        setNewPass('')
        setProfilePic('')
        setNewBio('')
        setSuccessfulSignUp(true)
    }

    function handleNewPass(e) {
        setNewPass(e.target.value)
    }
    
    function handleNewUser(e) {
        setNewUser(e.target.value)
    }

    function handleProfPic(e) {
        setProfilePic(e.target.value)
    }

    function handleNewBio(e) {
        setNewBio(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleNewUserSubmit}>
                <p>New Username:</p>
                <input
                onChange={handleNewUser}
                value={newUser}
                type='text'>
                </input>
                <p>Password:</p>
                <input
                onChange={handleNewPass}
                value={newPass}
                type='text'>
                </input>
                <p>Profile Picture:</p>
                <input
                onChange={handleProfPic}
                value={profilePic}
                type='text'>
                </input>
                <p>About You:</p>
                <input
                onChange={handleNewBio}
                value={newBio}
                type='text'>
                </input>
                <p></p>
                <button>Sign Up</button>
                <p></p>
                <p>
                    {successfulSignUp ? <p>Thankyou for Signing up! Make sure to log in to be able to upload and like other Posts!</p> : null}
                </p>
            </form>
        </div>
    )
}

export default CreateProfile