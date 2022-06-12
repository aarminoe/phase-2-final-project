import React, { useState } from "react";

function CreateProfile() {

    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')
    const [profilePic, setProfilePic] = useState('-')
    const [newBio, setNewBio] = useState('')

    function handleNewUserSubmit(e) {
        e.preventDefault()
        console.log('ye')
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
                <p>Username</p>
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
            </form>
        </div>
    )
}

export default CreateProfile