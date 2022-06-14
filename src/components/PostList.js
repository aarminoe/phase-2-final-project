import React from "react";
import Post from "./Post";

function PostList({ artList, logInEnable, uploadUser, onHandleDelete }){
    return (
    <>
        <h1 className="have-a-look">You can't see me!</h1>
        {artList.map((artist) => {
            return <Post 
            key={artist.name} 
            artist={artist} 
            logInEnable={logInEnable} 
            uploadUser={uploadUser}
            onHandleDelete={onHandleDelete}/>
        })}
    </>
    )
}

export default PostList