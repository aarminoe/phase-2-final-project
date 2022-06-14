import React, { useState } from "react";

function Upload({ logInEnable, uploadUser, onHandleNewUpload }) {

    const [imageFile, setImageFile] = useState('')
    const [title, setTitle] = useState('')
    const [artistName, setArtistName] = useState('')
    const [bio, setBio] = useState('')
    const [newUpload, setNewUpload] = useState(false)

    console.log(uploadUser)

    function handleSubmit(e) {
        e.preventDefault()

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
                likes: 0
            })
        })
        .then(resp => resp.json())
        .then(data => onHandleNewUpload(data))
        setImageFile('')
        setTitle('')
        setArtistName('')
        setBio('')
        setNewUpload(true)
        console.log(imageFile)
    }
    
    function handleImageFile(e) {
        setImageFile(e.target.value)
    }
    console.log(title)

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
                    <p>Image File:</p>
                    <input 
                    className="input"
                    onChange={handleImageFile}
                    type='text'
                    value={imageFile}>    
                    </input>
                </div>
                <div>
                    <p>Title:</p>
                    <input 
                    className="input" 
                    onChange={handleTitle} 
                    type='text'
                    value={title}>
                    </input>
                </div>
                <div>
                    <p>Artist Name:</p>
                    <input 
                    className="input" 
                    onChange={handleArtist} 
                    type='text'
                    value={uploadUser}>
                    </input>
                </div>
                <div>
                    <p>About:</p>
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
                    <button onClick={clearForm} className="submit-New">Submit</button>
                </div>
            </form> :
            "Please Log in to upload"
            }
            
        </div>
    )
}

export default Upload