import React from "react";
import UserPosts from "./UserPosts";

function User({ artList, uploadUser }) {

    const userData = []

    artList.forEach((artist) => {
        if (artist.name === uploadUser) {
            userData.push(artist)
        }
    })

    return (
        <div className="user-prof">
            {uploadUser ?
            <>
          
                <div>
                        <div className="profile-name-header">{uploadUser}</div>
                    <div>
                        {userData.map((post) => {
                            return <UserPosts key={post.id} post={post} />
                        })}                    
                    </div>
                </div>  
            </>      
                
                 : <p className="form">Please log in to view Profile</p>}
        </div>
    )
}

export default User