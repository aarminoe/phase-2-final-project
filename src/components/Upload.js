import React, { useState } from "react";

function Upload() {

    const [imageFile, setImageFile] = useState('')
    const [title, setTitle] = useState('')
    const [artistName, setArtistName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newPost = { imageFile, title, artistName}
        fetch('http://localhost:3001/art', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        setImageFile('')
        setTitle('')
        setArtistName('')
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

    function clearForm() {
        let form = document.getElementById('upload')
        form.reset()
    }

    return (
        <div>
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
                    value={artistName}>
                    </input>
                </div>
                <p></p>
                <div>
                    <button onClick={clearForm} className="submit-New">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Upload