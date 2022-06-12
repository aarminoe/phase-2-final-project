import React from "react";
import Post from "./Post";

function PostList({ artList, logInEnable }){
    return (
    <>
        <h1>Art</h1>
        {artList.map((artist) => {
            return <Post key={artist.name} artist={artist} logInEnable={logInEnable}/>
        })}
    </>
    )
}

export default PostList