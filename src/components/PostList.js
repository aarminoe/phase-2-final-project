import React from "react";
import Post from "./Post";

function PostList({ artList, logInEnable, uploadUser, onHandleDelete, onHandleComment, onHandleDeleteComment }){
    return (
    <>
        <h1 className="have-a-look">You can't see me!</h1>
        {artList.map((artist) => {
            return <Post 
            key={artist.id} 
            artist={artist} 
            logInEnable={logInEnable} 
            uploadUser={uploadUser}
            onHandleDelete={onHandleDelete}
            onHandleComment={onHandleComment}
            onHandleDeleteComment={onHandleDeleteComment}/>
        })}
    </>
    )
}

export default PostList