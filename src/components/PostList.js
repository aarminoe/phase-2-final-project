import React from "react";
import Post from "./Post";

function PostList({ artList }){
    return (
    <>
        <h1>Art</h1>
        {artList.map((artist) => {
            return <Post key={artist.name} artist={artist}/>
        })}
    </>
    )
}

export default PostList