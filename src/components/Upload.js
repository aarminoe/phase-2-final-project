import React, { useState } from "react";

function Upload({ logInEnable, uploadUser, onHandleNewUpload, onHandleDate }) {

    const [imageFile, setImageFile] = useState('')
    const [title, setTitle] = useState('')
    const [artistName, setArtistName] = useState('')
    const [bio, setBio] = useState('')
    const [newUpload, setNewUpload] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const date = new Date()
        fetch('http://localhost:3001/art', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: uploadUser,
                image: imageFile,
                title: title,
                bio: bio,
                likes: 0,
                date: date.toLocaleString('en-US')
            })
        })
        .then(resp => resp.json())
        .then(data => onHandleNewUpload(data))
        setImageFile('')
        setTitle('')
        setArtistName('')
        setBio('')
        setNewUpload(true)
        onHandleDate(Date().toString())
    }
    
    function handleImageFile(e) {
        setImageFile(e.target.value)
    }

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleArtist(e) {
        setArtistName(e.target.value)
        console.log(artistName)
    }

    function handleBio(e) {
        setBio(e.target.value)
    }

    function clearForm() {
        let form = document.getElementById('upload')
        form.reset()
    }

    return (
        <div className="component">
            {logInEnable ? 
            <form onSubmit={handleSubmit} id="upload" className="form">
                <div>
                    <p className="input-prompt">Image URL:</p>
                    <input 
                    className="input"
                    onChange={handleImageFile}
                    type='text'
                    value={imageFile}>    
                    </input>
                </div>
                <div>
                    <p className="input-prompt">Title:</p>
                    <input 
                    className="input" 
                    onChange={handleTitle} 
                    type='text'
                    value={title}>
                    </input>
                </div>
                <div>
                    <p className="input-prompt">Artist Name:</p>
                    <input 
                    className="input" 
                    onChange={handleArtist} 
                    type='text'
                    value={uploadUser}>
                    </input>
                </div>
                <div>
                    <p className="input-prompt">About:</p>
                    <textarea
                    className="text-area" 
                    onChange={handleBio} 
                    type='text'
                    value={bio}>
                    </textarea>
                </div>
                <p></p>
                {newUpload ? <p>File Successfully Uploaded!</p> : null}
                <div>
                    <button onClick={clearForm} className="button">Submit</button>
                </div>
            </form> :
            <p className="form">Please Log in to upload</p>
            
            }
            
        </div>
    )
}

export default Upload