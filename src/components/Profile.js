import React from "react";

function Profile({ artist }) {
    console.log(artist)
    return (
    <div className="profile-card">
        <h1>{artist.name}</h1>
        <div className="artist-avatar">
            <img src={artist.profilePic} />
        </div>
        <p>
           Bio: {artist.bio}
        </p>
    </div>
    )
}

export default Profile