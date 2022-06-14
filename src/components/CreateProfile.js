
import React, { useState } from "react";

function CreateProfile({ onHandleNewUser, artList }) {

    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')
    const [retypePass, setRetypePass] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [newBio, setNewBio] = useState('')
    const [successfulSignUp, setSuccessfulSignUp] = useState(false)
    const [signUpError, setSignUpError] = useState(false)
    const [userPassError, setUserPassError] = useState(false)
    const [passMatch, setPassMatch] = useState(true)

    function handleNewUserSubmit(e) {
        e.preventDefault()
        const artistNames = []
        artList.forEach((artist) => {
            artistNames.push(artist.name)
        })

        if (artistNames.includes(newUser)) {
            setSignUpError(true)
            setUserPassError(false)
            setNewUser('')
            setPassMatch(true)
        }
        else if (newUser === '' || newPass === ''){
            setUserPassError(true)
            setSignUpError(false)
            setPassMatch(true)
        }
        else if (retypePass !== newPass) {
            setPassMatch(false)
            setSignUpError(false)
            setUserPassError(false)
        }
        else {
            fetch('http://localhost:3001/art', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newUser,
                    password: newPass,
                    profilePic: profilePic,
                    bio: newBio,
                    likes: 0
                })
            })
            .then(resp => resp.json())
            .then(data => onHandleNewUser(data))
            setNewUser('')
            setNewPass('')
            setProfilePic('')
            setNewBio('')
            setRetypePass('')
            setSuccessfulSignUp(true)
            setUserPassError(false)
            setSignUpError(false)
        }
    }

    function handleNewPass(e) {
        setNewPass(e.target.value)
    }

    function handleRetypePass(e) {
        setRetypePass(e.target.value)
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
        <div className="component">
            <form onSubmit={handleNewUserSubmit} className='form'>
                <p className="input-prompt">New Username:</p>
                <input
                className="input"
                onChange={handleNewUser}
                value={newUser}
                type='text'>
                </input>
                <p className="input-prompt">Password:</p>
                <input
                className="input"
                onChange={handleNewPass}
                value={newPass}
                type='password'>
                </input>
                <p className="input-prompt">Re-Type Password:</p>
                <input
                className="input"
                onChange={handleRetypePass}
                value={retypePass}
                type='password'>
                </input>
                <p className="input-prompt">Profile Picture:</p>
                <input
                className="input"
                onChange={handleProfPic}
                value={profilePic}
                type='text'>
                </input>
                <p className="input-prompt">About You:</p>
                <textarea
                className="text-area" 
                onChange={handleNewBio}
                value={newBio}
                type='text'>
                </textarea>
                <p></p>
                <button className="button">Sign Up</button>
                <p></p>
                <p>
                    {successfulSignUp ? 'Thankyou for Signing up! Make sure to log in to be able to upload and like other Posts!' : null}
                    {signUpError ? 'There already exists a User with that name. Please try again.' : null}
                    {userPassError ? 'Username or Password Empty. Please try again.': null}
                    {passMatch ? null : 'Passwords Do Not Match. Please try again.'}
                </p>
            </form>
        </div>
    )
}

export default CreateProfile