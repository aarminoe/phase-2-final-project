import React from "react";
import PostList from './PostList'

function Home({ artList, logInEnable, uploadUser, onHandleDelete, onHandleComment, onHandleDeleteComment }) {
    return (
        <div className="home">
           
            <PostList 
            artList={artList} 
            logInEnable={logInEnable}
            uploadUser={uploadUser}
            onHandleDelete={onHandleDelete}
            onHandleComment={onHandleComment}
            onHandleDeleteComment={onHandleDeleteComment}/>
        </div>
    )
}

export default Home