import React, { useState } from "react";


function Post({ artist }) {

    console.log(artist)

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

    return (
    <div className="card">
        <div className="post">
            <div className="image">
                <img src={artist.image} alt="art!"/>
            </div>
            <h2 className="card-title">{artist.title}</h2>
            <p className="artist-post-name">By: {artist.name}</p>
            <p className="description">{artist.bio ? artist.bio : 'No bio added'}</p>
                <button 
                onClick={handleLike} 
                className="like-button">Like
                </button>
                <div>
                    {likes}
                </div>
            {/* <div>
                <p>Comment</p>
                <input className="comment" type='text'></input>
            </div> */}
        </div>
    </div>
    )
}

export default Post