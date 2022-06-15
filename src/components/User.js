import React, { useState } from "react";
import UserPosts from "./UserPosts";

function User({ artList, uploadUser }) {

    const [currentUser, setCurrentUser] = useState(null)

    const userData = []

    artList.forEach((artist) => {
        if (artist.name === uploadUser) {
            console.log(artist)
            userData.push(artist)
        }
    })

    return (
        <div>
            {uploadUser ?
            <>
          
                <div>
                    <div className="profile-name-header">{uploadUser}</div>
                    <div>
                        {userData.map((post) => {
                            return <UserPosts post={post} />
                        })}                    
                    </div>
                </div>  
            </>      
                
                 : <p className="form">Please log in to view Profile</p>}
        </div>
    )
}

export default User