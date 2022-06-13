import React, { useState } from "react";


function Post({ artist, logInEnable, uploadUser, onHandleDelete }) {

    console.log(artist)
    console.log(uploadUser)

    const [likes, setLikes] = useState(artist.likes)

    function handleLike() {
        fetch(`http://localhost:3001/art/${artist.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: likes
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        setLikes((likes) => likes + 1)
    }

    function onHandleDeleteClick() {
        onHandleDelete(artist)
    }

    if (artist.profilePic) {
        return null
    }
    return (
        <div className="card">
            <div className="post">
                <div className="image">
                    <img src={artist.image} alt="Image File Not Supported" width='400px'/>
                </div>
                <h2 className="card-title">{artist.title}</h2>
                <p className="artist-post-name">Uploaded By: {artist.name}</p>
                <p className="description">{artist.bio ? artist.bio : 'No bio added'}</p>
                {logInEnable ?
                    <>
                        <button 
                        onClick={handleLike} 
                        className="like-button">🤍
                        </button>
                        <div className="like-number" value={likes}>
                            {likes} Likes      
                        </div> </>
                        : 'Please Log in to like posts!'     
                }    
                {uploadUser === artist.name ? <button className="delete" onClick={onHandleDeleteClick}>Delete Post</button> : null}
                    {/* <div>
                        <p>Comment</p>
                        <input className="comment" type='text'></input>
                    </div> */}
                </div>
         </div>
    )

}

export default Post