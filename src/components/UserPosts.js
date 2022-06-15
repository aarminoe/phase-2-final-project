import React from "react";

function UserPosts({ post }) {
    console.log(post)
    return (
        <>
        <div className="avatar-card">
            <img className="profile-avatar" width='100px'src={post.profilePic} />
        </div>
        <div className="card">
            {post.profilePic ? null : 
            <div className="post">
            <div className="image">
                <img src={post.image} alt="Image File Not Supported" width='400px'/>
            </div>
            <div className="post-text">
                <h2 className="card-title">{post.title}</h2>
                <p className="artist-post-name">Uploaded By: {post.name}</p>
                <p className="description">{post.bio ? post.bio : null}</p>
            </div>
            </div>}
         </div>
        
        </>
    )
}

export default UserPosts