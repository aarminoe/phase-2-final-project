import React from "react";

function UserPosts({ post }) {

    return (
        <>
            <div className="avatar-card">
                <img className="profile-avatar" width='200px' src={post.profilePic} />
            </div>
            <p className="profile-about-me">{post.profilePic ? 
            <>
                <p className="about-me">About Me:</p>
                <div className="prof-bio">
                    {post.bio}
                </div> 
            </>
            : null}</p>
            <div className="card">
                {post.profilePic ? null : 
                <div className="post">
                <div className="image">
                    <img src={post.image} alt="Image File Not Supported" width='400px'/>
                </div>
                <div className="post-text">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="artist-post-name">Uploaded By You</p>
                    <p className="date">Uploaded on: {post.date}</p>
                    <p className="description">{post.bio ? post.bio : null}</p>
                </div>
                </div>}
            </div>
        
        </>
    )
}

export default UserPosts