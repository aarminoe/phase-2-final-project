import React, { useState } from "react";

function Upload({ uploadEnable, uploadUser }) {

    const [imageFile, setImageFile] = useState('')
    const [title, setTitle] = useState('')
    const [artistName, setArtistName] = useState('')
    const [bio, setBio] = useState('')

    console.log(uploadEnable)
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
        .then(data => console.log(data))
        setImageFile('')
        setTitle('')
        setArtistName('')
        setBio('')
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
        <div>
            {uploadEnable ? 
            <form onSubmit={handleSubmit} id="upload">
                <div>
                    <p>Image File:</p>
                    <input 
                    className="image-file-input"
                    onChange={handleImageFile}
                    type='text'
                    value={imageFile}>    
                    </input>
                </div>
                <div>
                    <p>Title:</p>
                    <input 
                    className="title-input" 
                    onChange={handleTitle} 
                    type='text'
                    value={title}>
                    </input>
                </div>
                <div>
                    <p>Artist Name:</p>
                    <input 
                    className="artist-input" 
                    onChange={handleArtist} 
                    type='text'
                    value={uploadUser}>
                    </input>
                </div>
                <div>
                    <p>About:</p>
                    <input 
                    className="bio-input" 
                    onChange={handleBio} 
                    type='text'
                    value={bio}>
                    </input>
                </div>
                <p></p>
                <div>
                    <button onClick={clearForm} className="submit-New">Submit</button>
                </div>
            </form> :
            "Please Log In in order to upload"
            }
            
        </div>
    )
}

export default Upload