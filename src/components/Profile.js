import React from "react";

function Profile({ artist }) {
    return (
    <div className="profile-card">
        <h1>{artist.name}</h1>
        <div className="artist-avatar">
            {artist.avatar}
        </div>
    </div>
    )
}

export default Profile